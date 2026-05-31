import { apiRequest } from './client';

export async function trackLandingVisit(metadata = {}) {
  return apiRequest('/api/events/landing-visit', {
    method: 'POST',
    body: JSON.stringify({ metadata }),
  });
}
