const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { trackEvent } = require('./eventService');

const findUserByEmail = async (email) => {
  return User.findOne({ email }).select('+passwordHash');
};

const findUserByProvider = async (provider, providerId) => {
  return User.findOne({ provider, providerId });
};

const createUser = async ({ name, email, password, provider = 'local', providerId = null, avatar = null }) => {
  const userData = {
    name,
    email,
    provider,
    providerId,
    avatar,
  };

  if (provider === 'local' && password) {
    userData.passwordHash = await bcrypt.hash(password, 10);
  }

  const user = new User(userData);
  return user.save();
};

const trackSignupEvent = async (userId, metadata = {}) => {
  return trackEvent({ userId, eventType: 'SIGNUP', metadata });
};

const trackLoginEvent = async (userId, metadata = {}) => {
  return trackEvent({ userId, eventType: 'LOGIN', metadata });
};

const trackLogoutEvent = async (userId, metadata = {}) => {
  return trackEvent({ userId, eventType: 'LOGOUT', metadata });
};

const generateToken = (user) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not configured in environment variables');
  }

  return jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    secret,
    {
      expiresIn: '7d',
    }
  );
};

const findUserById = async (id) => {
  return User.findById(id).select('-passwordHash');
};

module.exports = {
  findUserByEmail,
  findUserByProvider,
  createUser,
  trackSignupEvent,
  trackLoginEvent,
  trackLogoutEvent,
  generateToken,
  findUserById,
};
