const crypto = require('node:crypto');
const Meeting = require('../models/Meeting');

const addParticipantIfMissing = (participants, user, joinedAt = null) => {
  const userId = String(user._id);
  const exists = participants.some((participant) => String(participant.userId) === userId);

  if (!exists) {
    participants.push({
      userId: user._id,
      name: user.name,
      email: user.email,
      joinedAt,
    });
  }
};

const buildRoomUrl = (meetingId) => {
  return `https://meet.jit.si/devsphere-${meetingId}`;
};

const listMeetingsForUser = async ({ userId, email }) => {
  return Meeting.find({
    $or: [
      { createdBy: userId },
      { 'participants.userId': userId },
      { invitedEmails: email },
    ],
  }).sort({ scheduledAt: 1 });
};

const getMeetingForUser = async ({ meetingId, userId, email }) => {
  const meeting = await Meeting.findOne({
    _id: meetingId,
    $or: [
      { createdBy: userId },
      { 'participants.userId': userId },
      { invitedEmails: email },
    ],
  });

  if (!meeting) {
    const error = new Error('Meeting not found');
    error.statusCode = 404;
    throw error;
  }

  return meeting;
};

const normalizeEmail = (email) => email.trim().toLowerCase();

const getParticipantPayload = (user, joinedAt = null) => ({
  userId: user._id,
  name: user.name,
  email: user.email,
  joinedAt,
});

const buildInviteLink = (meetingId, token) => {
  const origin = process.env.FRONTEND_URL || process.env.APP_URL || 'http://localhost:5173';
  return `${origin}/dashboard/meetings/${meetingId}/room?invite=${token}`;
};

const createMeeting = async ({ user, title, description = '', scheduledAt, durationMinutes = 30 }) => {
  const meeting = new Meeting({
    title,
    description,
    scheduledAt,
    durationMinutes,
    createdBy: user._id,
    participants: [],
    invitedEmails: [],
  });

  addParticipantIfMissing(meeting.participants, user);
  meeting.roomUrl = buildRoomUrl(meeting._id);

  return meeting.save();
};

const inviteToMeeting = async ({ meetingId, user, email }) => {
  const meeting = await Meeting.findById(meetingId);

  if (!meeting) {
    const error = new Error('Meeting not found');
    error.statusCode = 404;
    throw error;
  }

  if (String(meeting.createdBy) !== String(user._id)) {
    const error = new Error('Only the meeting owner can invite people');
    error.statusCode = 403;
    throw error;
  }

  const inviteEmail = normalizeEmail(email);
  if (!inviteEmail) {
    const error = new Error('Invite email is required');
    error.statusCode = 400;
    throw error;
  }

  const token = crypto.randomUUID();

  if (!meeting.invitedEmails.includes(inviteEmail)) {
    meeting.invitedEmails.push(inviteEmail);
  }

  meeting.invites.unshift({
    email: inviteEmail,
    token,
    status: 'sent',
    invitedAt: new Date(),
    acceptedAt: null,
  });

  meeting.markModified('invites');
  meeting.markModified('invitedEmails');

  const saved = await meeting.save();
  const response = saved.toObject();
  response.inviteLink = buildInviteLink(saved._id, token);
  response.lastInvite = {
    email: inviteEmail,
    token,
    inviteLink: response.inviteLink,
  };

  return response;
};

const joinMeeting = async ({ meetingId, user }) => {
  const meeting = await Meeting.findById(meetingId);

  if (!meeting) {
    const error = new Error('Meeting not found');
    error.statusCode = 404;
    throw error;
  }

  const isOwner = String(meeting.createdBy) === String(user._id);
  const isParticipant = meeting.participants.some((participant) => String(participant.userId) === String(user._id));
  const isInvited = meeting.invitedEmails.includes(user.email);

  if (!isOwner && !isParticipant && !isInvited) {
    const error = new Error('You are not invited to this meeting');
    error.statusCode = 403;
    throw error;
  }

  const now = new Date();
  const update = {};
  const options = {};

  if (!meeting.roomUrl) {
    update.$set = {
      ...update.$set,
      roomUrl: buildRoomUrl(meeting._id),
    };
  }

  if (isInvited) {
    update.$set = {
      ...update.$set,
      'invites.$[invite].status': 'accepted',
      'invites.$[invite].acceptedAt': now,
    };
    options.arrayFilters = [
      {
        'invite.email': user.email,
        'invite.status': { $ne: 'accepted' },
      },
    ];
  }

  if (Object.keys(update).length > 0) {
    await Meeting.updateOne({ _id: meetingId }, update, options);
  }

  if (!isParticipant) {
    await Meeting.updateOne(
      {
        _id: meetingId,
        'participants.userId': { $ne: user._id },
      },
      {
        $push: {
          participants: getParticipantPayload(user, now),
        },
      }
    );
  }

  return Meeting.findById(meetingId);
};

module.exports = {
  listMeetingsForUser,
  getMeetingForUser,
  createMeeting,
  inviteToMeeting,
  joinMeeting,
};
