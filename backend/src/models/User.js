const mongoose = require('mongoose');

const PROVIDERS = ['local', 'google', 'github'];

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    avatar: {
      type: String,
      trim: true,
      default: null,
    },
    provider: {
      type: String,
      enum: PROVIDERS,
      default: 'local',
      required: true,
    },
    providerId: {
      type: String,
      trim: true,
      default: null,
    },
    passwordHash: {
      type: String,
      select: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index(
  { provider: 1, providerId: 1 },
  {
    unique: true,
    partialFilterExpression: {
      provider: { $in: ['google', 'github'] },
      providerId: { $exists: true, $type: 'string' },
    },
  }
);
userSchema.index({ createdAt: -1 });

const User = mongoose.model('User', userSchema);

module.exports = User;
module.exports.PROVIDERS = PROVIDERS;
