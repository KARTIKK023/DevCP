const formatUser = (user) => ({
  id: user._id.toString(),
  name: user.name,
  email: user.email,
  avatar: user.avatar || null,
  provider: user.provider,
  providerId: user.providerId || null,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

module.exports = formatUser;
