const mongoose = require('mongoose');

const EVENT_TYPES = ['SIGNUP', 'LOGIN', 'LOGOUT', 'LANDING_VISIT'];

const eventSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
      index: true,
    },
    eventType: {
      type: String,
      enum: EVENT_TYPES,
      required: [true, 'Event type is required'],
      index: true,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

eventSchema.index({ eventType: 1, createdAt: -1 });
eventSchema.index({ userId: 1, createdAt: -1 });
eventSchema.index({ createdAt: -1 });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
module.exports.EVENT_TYPES = EVENT_TYPES;
