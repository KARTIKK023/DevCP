const jwt = require('jsonwebtoken');
const { findUserById } = require('../services/authService');

const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next();
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET;

    if (!token || !secret) {
      return next();
    }

    try {
      const decoded = jwt.verify(token, secret);
      if (decoded?.userId) {
        const user = await findUserById(decoded.userId);
        if (user) {
          req.user = user;
        }
      }
    } catch {
      // Invalid token — continue without user context
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = optionalAuth;
