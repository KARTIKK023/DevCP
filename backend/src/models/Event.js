const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
      index: true,
    },
    eventName: {
      type: String,
      required: [true, 'Event name is required'],
      trim: true,
      minlength: [1, 'Event name cannot be empty'],
      maxlength: [200, 'Event name cannot exceed 200 characters'],
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Indexes
eventSchema.index({ userId: 1, createdAt: -1 }); // Compound index for efficient queries
eventSchema.index({ createdAt: -1 });
eventSchema.index({ eventName: 1 });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
