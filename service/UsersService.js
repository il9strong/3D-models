const userRepository = require("../repository/UsersRepository");

const createUser = async (userData) => {
  const user = await userRepository.createUser(userData);
  return user;
};

const getUserById = async (userId) => {
  const user = await userRepository.getUserById(userId);
  return user;
};

const updateUser = async (userId, userData) => {
  const user = await userRepository.updateUser(userId, userData);
  return user;
};

const deleteUser = async (userId) => {
  await userRepository.deleteUser(userId);
};

const getAllUsers = async () => {
  const user = await userRepository.getAllUsers();
  return user;
};

const getUserProfile = async (userId) => {
  return await userRepository.getUserProfile(userId);
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserProfile,
};
