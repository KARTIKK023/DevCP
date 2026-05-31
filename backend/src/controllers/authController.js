const bcrypt = require('bcryptjs');
const formatUser = require('../utils/formatUser');
const {
  findUserByEmail,
  createUser,
  trackSignupEvent,
  trackLoginEvent,
  trackLogoutEvent,
  generateToken,
} = require('../services/authService');

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

    // #region agent log
    fetch('http://127.0.0.1:7538/ingest/2e1c2ab1-e6ed-4201-b7c8-fbb89c3e6453',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'6e83b9'},body:JSON.stringify({sessionId:'6e83b9',runId:'post-fix',location:'authController.js:signup:success',message:'signup user created',data:{provider:user.provider,hasProviderId:Boolean(user.providerId),userId:String(user._id)},timestamp:Date.now(),hypothesisId:'A'})}).catch(()=>{});
    // #endregion

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
    // #region agent log
    fetch('http://127.0.0.1:7538/ingest/2e1c2ab1-e6ed-4201-b7c8-fbb89c3e6453',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'6e83b9'},body:JSON.stringify({sessionId:'6e83b9',runId:'post-fix',location:'authController.js:signup:error',message:'signup failed',data:{code:error.code,index:error.keyPattern?Object.keys(error.keyPattern).join('_'):null,keyValue:error.keyValue||null,errorName:error.name},timestamp:Date.now(),hypothesisId:'A,B,D'})}).catch(()=>{});
    // #endregion
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
  me,
  logout,
};
