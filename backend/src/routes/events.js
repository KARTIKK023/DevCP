const express = require('express');
const optionalAuth = require('../middleware/optionalAuth');
const { trackLandingVisit } = require('../controllers/eventController');

const router = express.Router();

router.post('/landing-visit', optionalAuth, trackLandingVisit);

module.exports = router;
