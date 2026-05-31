const { trackEvent } = require('../services/eventService');

const trackLandingVisit = async (req, res, next) => {
  try {
    const { metadata = {} } = req.body;
    const userId = req.user?._id || null;

    await trackEvent({
      userId,
      eventType: 'LANDING_VISIT',
      metadata: {
        path: metadata.path || '/',
        referrer: metadata.referrer || null,
        userAgent: req.headers['user-agent'] || null,
        ...metadata,
      },
    });

    res.status(201).json({
      status: 'success',
      message: 'Event tracked',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  trackLandingVisit,
};
