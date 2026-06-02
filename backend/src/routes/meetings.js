const express = require('express');
const { create, index, invite, join, show } = require('../controllers/meetingController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', index);
router.post('/', create);
router.get('/:id', show);
router.post('/:id/invites', invite);
router.post('/:id/join', join);

module.exports = router;
