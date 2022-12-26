const User = require("../models/User");

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json(user);
};

module.exports = {
  getUserById,
};
