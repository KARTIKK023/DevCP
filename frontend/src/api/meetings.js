import { apiRequest } from './client';

export async function getMeetings() {
  const data = await apiRequest('/api/meetings');
  return data.data.meetings;
}

export async function getMeeting(id) {
  const data = await apiRequest(`/api/meetings/${id}`);
  return data.data.meeting;
}

export async function createMeeting(payload) {
  const data = await apiRequest('/api/meetings', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return data.data.meeting;
}

export async function inviteToMeeting(id, email) {
  const data = await apiRequest(`/api/meetings/${id}/invites`, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });

  return {
    meeting: {
      ...data.data.meeting,
      inviteLink: data.data.inviteLink,
      lastInvite: data.data.lastInvite,
    },
    inviteLink: data.data.inviteLink,
    lastInvite: data.data.lastInvite,
  };
}

export async function joinMeeting(id) {
  const data = await apiRequest(`/api/meetings/${id}/join`, {
    method: 'POST',
  });

  return data.data.meeting;
}
