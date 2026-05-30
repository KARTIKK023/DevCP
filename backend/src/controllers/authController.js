const bcrypt = require('bcryptjs');
const {
  findUserByEmail,
  createUser,
  createSignupEvent,
  createLoginEvent,
  generateToken,
  updateLastSeen,
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
    });

    await createSignupEvent(user._id, {
      email: user.email,
      name: user.name,
    });

    res.status(201).json({
      status: 'success',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          authProviders: user.authProviders,
          githubUsername: user.githubUsername || null,
          avatar: user.avatar || null,
          createdAt: user.createdAt,
          lastSeenAt: user.lastSeenAt,
        },
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

    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid email or password',
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid email or password',
      });
    }

    await updateLastSeen(user);
    const token = generateToken(user);

    await createLoginEvent(user._id, {
      email: user.email,
      name: user.name,
    });

    res.status(200).json({
      status: 'success',
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          authProviders: user.authProviders,
          githubUsername: user.githubUsername || null,
          avatar: user.avatar || null,
          createdAt: user.createdAt,
          lastSeenAt: user.lastSeenAt,
        },
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
        success: false,
        message: 'Unauthorized',
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
  me,
};
