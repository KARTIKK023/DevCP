const Event = require('../models/Event');

const trackEvent = async ({ userId = null, eventType, metadata = {} }) => {
  return Event.create({
    userId,
    eventType,
    metadata,
  });
};

module.exports = {
  trackEvent,
};
