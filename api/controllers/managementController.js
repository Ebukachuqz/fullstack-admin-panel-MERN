const User = require("../models/User");

const getAdmins = async (req, res) => {
  const admins = await User.find({ role: "admin" }).select("-password");
  res.status(200).json(admins);
};

module.exports = { getAdmins };
