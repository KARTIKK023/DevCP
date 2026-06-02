const bcrypt = require('bcryptjs');
const config = require('../config');
const formatUser = require('../utils/formatUser');
const {
  findUserByEmail,
  createUser,
  upsertOAuthUser,
  trackSignupEvent,
  trackLoginEvent,
  trackLogoutEvent,
  generateToken,
} = require('../services/authService');

const oauthProviders = {
  google: {
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    profileUrl: 'https://www.googleapis.com/oauth2/v2/userinfo',
    clientId: () => config.googleClientId,
    clientSecret: () => config.googleClientSecret,
    scopes: 'openid email profile',
    mapProfile: (profile) => ({
      provider: 'google',
      providerId: profile.id,
      email: profile.email,
      name: profile.name,
      avatar: profile.picture,
    }),
  },
  github: {
    authUrl: 'https://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    profileUrl: 'https://api.github.com/user',
    emailUrl: 'https://api.github.com/user/emails',
    clientId: () => config.githubClientId,
    clientSecret: () => config.githubClientSecret,
    scopes: 'read:user user:email',
    mapProfile: (profile, email) => ({
      provider: 'github',
      providerId: String(profile.id),
      email,
      name: profile.name || profile.login,
      avatar: profile.avatar_url,
    }),
  },
};

const getBackendCallbackUrl = (provider, req) => {
  const protocol = req.headers['x-forwarded-proto'] || req.protocol;
  const host = req.get('host');
  return `${protocol}://${host}/api/auth/${provider}/callback`;
};

const redirectToFrontend = (res, params) => {
  const url = new URL('/auth/callback', config.frontendUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });
  return res.redirect(url.toString());
};

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        status: 'error',
        message: 'Name is required and must be at least 2 characters long',
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        status: 'error',
        message: 'Email is required',
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        status: 'error',
        message: 'Password must be at least 6 characters long',
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await findUserByEmail(normalizedEmail);

    if (existingUser) {
      return res.status(409).json({
        status: 'error',
        message: 'Email is already registered',
      });
    }

    const user = await createUser({
      name: name.trim(),
      email: normalizedEmail,
      password,
      provider: 'local',
    });

    await trackSignupEvent(user._id, {
      email: user.email,
      name: user.name,
      provider: user.provider,
    });

    const token = generateToken(user);

    res.status(201).json({
      status: 'success',
      data: {
        token,
        user: formatUser(user),
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !email.trim()) {
      return res.status(400).json({
        status: 'error',
        message: 'Email is required',
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        status: 'error',
        message: 'Password must be at least 6 characters long',
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await findUserByEmail(normalizedEmail);

    if (!user || !user.passwordHash) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid email or password',
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatches) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid email or password',
      });
    }

    const token = generateToken(user);

    await trackLoginEvent(user._id, {
      email: user.email,
      name: user.name,
      provider: user.provider,
    });

    res.status(200).json({
      status: 'success',
      data: {
        token,
        user: formatUser(user),
      },
    });
  } catch (error) {
    next(error);
  }
};

const startOAuth = (provider) => async (req, res, next) => {
  try {
    const providerConfig = oauthProviders[provider];

    if (!providerConfig || !providerConfig.clientId() || !providerConfig.clientSecret()) {
      return redirectToFrontend(res, {
        status: 'error',
        message: `${provider} login is not configured`,
      });
    }

    const url = new URL(providerConfig.authUrl);
    url.searchParams.set('client_id', providerConfig.clientId());
    url.searchParams.set('redirect_uri', getBackendCallbackUrl(provider, req));
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('scope', providerConfig.scopes);
    url.searchParams.set('state', provider);

    res.redirect(url.toString());
  } catch (error) {
    next(error);
  }
};

const exchangeOAuthCode = async ({ provider, code, redirectUri }) => {
  const providerConfig = oauthProviders[provider];

  const response = await fetch(providerConfig.tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: new URLSearchParams({
      client_id: providerConfig.clientId(),
      client_secret: providerConfig.clientSecret(),
      redirect_uri: redirectUri,
      code,
      grant_type: 'authorization_code',
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.access_token) {
    throw new Error(data.error_description || data.message || 'Unable to authenticate with provider');
  }

  return data.access_token;
};

const fetchOAuthProfile = async (provider, accessToken) => {
  const providerConfig = oauthProviders[provider];

  const profileResponse = await fetch(providerConfig.profileUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  });

  const profile = await profileResponse.json();

  if (!profileResponse.ok) {
    throw new Error(profile.message || 'Unable to fetch provider profile');
  }

  if (provider === 'github') {
    let email = profile.email;

    if (!email) {
      const emailResponse = await fetch(providerConfig.emailUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });
      const emails = await emailResponse.json();
      const primaryEmail = Array.isArray(emails)
        ? emails.find((item) => item.primary && item.verified) || emails.find((item) => item.verified)
        : null;
      email = primaryEmail?.email;
    }

    if (!email) {
      email = `${profile.login || profile.id}@users.noreply.github.com`;
    }

    return providerConfig.mapProfile(profile, email);
  }

  return providerConfig.mapProfile(profile);
};

const oauthCallback = (provider) => async (req, res, next) => {
  try {
    const { code, error } = req.query;

    if (error) {
      return redirectToFrontend(res, {
        status: 'error',
        message: `Unable to login with ${provider}`,
      });
    }

    if (!code) {
      return redirectToFrontend(res, {
        status: 'error',
        message: 'OAuth code missing',
      });
    }

    const accessToken = await exchangeOAuthCode({
      provider,
      code,
      redirectUri: getBackendCallbackUrl(provider, req),
    });
    const profile = await fetchOAuthProfile(provider, accessToken);

    const user = await upsertOAuthUser(profile);
    const token = generateToken(user);

    await trackLoginEvent(user._id, {
      email: user.email,
      name: user.name,
      provider: user.provider,
    });

    return redirectToFrontend(res, {
      status: 'success',
      token,
      provider,
    });
  } catch (error) {
    return redirectToFrontend(res, {
      status: 'error',
      message: error.message,
    });
  }
};

const me = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        status: 'error',
        message: 'Unauthorized',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        user: formatUser(req.user),
      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    if (req.user) {
      await trackLogoutEvent(req.user._id, {
        email: req.user.email,
        name: req.user.name,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Logged out successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
  startOAuth,
  oauthCallback,
  me,
  logout,
};
