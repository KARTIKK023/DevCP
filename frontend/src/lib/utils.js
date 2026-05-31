export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function getInitials(name = '') {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('') || '?';
}

export function formatDate(dateString) {
  if (!dateString) return '—';
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
}

export function formatProvider(provider) {
  const labels = {
    local: 'Email & Password',
    google: 'Google',
    github: 'GitHub',
  };
  return labels[provider] || provider;
}
