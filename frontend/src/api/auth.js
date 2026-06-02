import { apiRequest, setToken } from './client';
const API_BASE = import.meta.env.VITE_API_URL || '';

export async function signup({ name, email, password }) {
  const data = await apiRequest('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });

  if (data?.data?.token) {
    setToken(data.data.token);
  }

  return data.data;
}

export async function login({ email, password }) {
  const data = await apiRequest('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (data?.data?.token) {
    setToken(data.data.token);
  }

  return data.data;
}

export async function getCurrentUser() {
  const data = await apiRequest('/api/auth/me');
  return data.data.user;
}

export function getOAuthUrl(provider) {
}

export function getOAuthUrl(provider) {
  const base = API_BASE.replace(/\/$/, '');
  return `${base}/api/auth/${provider}`;
}

export async function logout() {
  try {
    await apiRequest('/api/auth/logout', { method: 'POST' });
  } finally {
    setToken(null);
  }
}
