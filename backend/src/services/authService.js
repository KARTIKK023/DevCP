const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Event = require('../models/Event');

const findUserByEmail = async (email) => {
  return User.findOne({ email }).select('+password');
};

const createUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    authProviders: {
      local: true,
      google: false,
      github: false,
    },
    lastSeenAt: new Date(),
  });

  return user.save();
};

const createSignupEvent = async (userId, metadata = {}) => {
  return Event.create({
    userId,
    eventName: 'user_signup',
    metadata,
  });
};

const createLoginEvent = async (userId, metadata = {}) => {
  return Event.create({
    userId,
    eventName: 'user_login',
    metadata,
  });
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
      expiresIn: '2h',
    }
  );
};

const updateLastSeen = async (user) => {
  user.lastSeenAt = new Date();
  return user.save();
};

const findUserById = async (id) => {
  return User.findById(id).select('-password');
};

module.exports = {
  findUserByEmail,
  createUser,
  createSignupEvent,
  createLoginEvent,
  generateToken,
  updateLastSeen,
  findUserById,
};
