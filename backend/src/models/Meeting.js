const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [2, 'Title must be at least 2 characters long'],
      maxlength: [120, 'Title cannot exceed 120 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
      default: '',
    },
    scheduledAt: {
      type: Date,
      required: [true, 'Scheduled time is required'],
      index: true,
    },
    durationMinutes: {
      type: Number,
      min: [5, 'Duration must be at least 5 minutes'],
      max: [480, 'Duration cannot exceed 480 minutes'],
      default: 30,
    },
    roomUrl: {
      type: String,
      trim: true,
      default: '',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    participants: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
        email: {
          type: String,
          required: true,
          trim: true,
          lowercase: true,
        },
        joinedAt: {
          type: Date,
          default: null,
        },
      },
    ],
    invitedEmails: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],
    invites: [
      {
        email: {
          type: String,
          trim: true,
          lowercase: true,
          required: true,
        },
        token: {
          type: String,
          required: true,
          index: true,
        },
        status: {
          type: String,
          enum: ['pending', 'sent', 'accepted'],
          default: 'sent',
        },
        invitedAt: {
          type: Date,
          default: Date.now,
        },
        acceptedAt: {
          type: Date,
          default: null,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

meetingSchema.index({ createdBy: 1, scheduledAt: 1 });

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
