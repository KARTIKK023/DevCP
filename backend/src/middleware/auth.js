const jwt = require('jsonwebtoken');
const { findUserById } = require('../services/authService');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        status: 'error',
        message: 'Authorization token missing or malformed',
      });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        status: 'error',
        message: 'Authorization token missing or malformed',
      });
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is not configured in environment variables');
    }

    let decoded;
    try {
      decoded = jwt.verify(token, secret);
    } catch (error) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid or expired token',
      });
    }

    if (!decoded || !decoded.userId) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid token payload',
      });
    }

    const user = await findUserById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'User not found',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;
