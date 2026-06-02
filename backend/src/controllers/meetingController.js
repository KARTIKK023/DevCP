const {
  createMeeting,
  getMeetingForUser,
  inviteToMeeting,
  joinMeeting,
  listMeetingsForUser,
} = require('../services/meetingService');

const getAccessType = (meeting, user) => {
  if (String(meeting.createdBy) === String(user._id)) {
    return 'owner';
  }

  const isParticipant = meeting.participants.some(
    (participant) => String(participant.userId) === String(user._id)
  );

  if (isParticipant) {
    return 'participant';
  }

  if ((meeting.invitedEmails || []).includes(user.email)) {
    return 'invited';
  }

  return 'unknown';
};

const toMeetingResponse = (meeting, user) => ({
  id: meeting._id,
  title: meeting.title,
  description: meeting.description,
  scheduledAt: meeting.scheduledAt,
  durationMinutes: meeting.durationMinutes,
  roomUrl: meeting.roomUrl,
  createdBy: meeting.createdBy,
  participants: meeting.participants.map((participant) => ({
    userId: participant.userId,
    name: participant.name,
    email: participant.email,
    joinedAt: participant.joinedAt,
  })),
  invitedEmails: meeting.invitedEmails || [],
  invites: meeting.invites || [],
  accessType: user ? getAccessType(meeting, user) : 'unknown',
  createdAt: meeting.createdAt,
  updatedAt: meeting.updatedAt,
});

const index = async (req, res, next) => {
  try {
    const meetings = await listMeetingsForUser({
      userId: req.user._id,
      email: req.user.email,
    });

    res.status(200).json({
      status: 'success',
      data: {
        meetings: meetings.map((meeting) => toMeetingResponse(meeting, req.user)),
      },
    });
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const meeting = await getMeetingForUser({
      meetingId: req.params.id,
      userId: req.user._id,
      email: req.user.email,
    });

    res.status(200).json({
      status: 'success',
      data: {
        meeting: toMeetingResponse(meeting, req.user),
      },
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { title, description, scheduledAt, durationMinutes } = req.body;

    if (!title || title.trim().length < 2) {
      return res.status(400).json({
        status: 'error',
        message: 'Title is required and must be at least 2 characters long',
      });
    }

    if (!scheduledAt || Number.isNaN(new Date(scheduledAt).getTime())) {
      return res.status(400).json({
        status: 'error',
        message: 'A valid scheduled time is required',
      });
    }

    const parsedDuration = Number(durationMinutes || 30);
    if (!Number.isFinite(parsedDuration) || parsedDuration < 5 || parsedDuration > 480) {
      return res.status(400).json({
        status: 'error',
        message: 'Duration must be between 5 and 480 minutes',
      });
    }

    const meeting = await createMeeting({
      user: req.user,
      title: title.trim(),
      description: description?.trim() || '',
      scheduledAt: new Date(scheduledAt),
      durationMinutes: parsedDuration,
    });

    res.status(201).json({
      status: 'success',
      data: {
        meeting: toMeetingResponse(meeting),
      },
    });
  } catch (error) {
    next(error);
  }
};

const invite = async (req, res, next) => {
  try {
    const { email } = req.body;

    const meeting = await inviteToMeeting({
      meetingId: req.params.id,
      user: req.user,
      email,
    });

    res.status(200).json({
      status: 'success',
      data: {
        meeting: toMeetingResponse(meeting, req.user),
        inviteLink: meeting.inviteLink,
        lastInvite: meeting.lastInvite,
      },
    });
  } catch (error) {
    next(error);
  }
};

const join = async (req, res, next) => {
  try {
    const meeting = await joinMeeting({
      meetingId: req.params.id,
      user: req.user,
    });

    res.status(200).json({
      status: 'success',
      data: {
        meeting: toMeetingResponse(meeting, req.user),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
  show,
  create,
  invite,
  join,
};
