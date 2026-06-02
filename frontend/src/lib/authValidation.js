const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEmail(email) {
  if (!email.trim()) return "Email is required.";
  if (!emailPattern.test(email.trim())) {
    return "Use a valid email format like you@company.com.";
  }
  return "";
}

export function validatePassword(password) {
  if (!password) return "Password is required.";
  if (password.length < 6) return "Password must be at least 6 characters long.";
  return "";
}

export function validateName(name) {
  if (!name.trim()) return "Full name is required.";
  if (name.trim().length < 2) return "Full name must be at least 2 characters.";
  return "";
}
