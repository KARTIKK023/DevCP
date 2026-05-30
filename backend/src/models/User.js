const mongoose = require('mongoose');

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
    password: {
      type: String,
      minlength: [6, 'Password must be at least 6 characters long'],
      select: false, // Don't return password by default
    },
    authProviders: {
      local: {
        type: Boolean,
        default: true,
      },
      google: {
        type: Boolean,
        default: false,
      },
      github: {
        type: Boolean,
        default: false,
      },
    },
    githubUsername: {
      type: String,
      unique: true,
      sparse: true, // Allow multiple null values for unique constraint
      trim: true,
    },
    avatar: {
      type: String,
      trim: true,
    },
    lastSeenAt: {
      type: Date,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ githubUsername: 1 });
userSchema.index({ createdAt: -1 });
userSchema.index({ lastSeenAt: -1 });

// Pre-save middleware to update lastSeenAt on creation
userSchema.pre('save', function (next) {
  if (this.isNew) {
    this.lastSeenAt = new Date();
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
