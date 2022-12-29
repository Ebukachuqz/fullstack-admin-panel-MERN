const { default: mongoose } = require("mongoose");
const Transaction = require("../models/Transaction");
const User = require("../models/User");

const getAdmins = async (req, res) => {
  const admins = await User.find({ role: "admin" }).select("-password");
  res.status(200).json(admins);
};

const userStats = async (req, res) => {
  const { id } = req.params;

  const userWithStats = await User.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(id) } },
    {
      $lookup: {
        from: "affiliatestats",
        localField: "_id",
        foreignField: "userId",
        as: "affiliateStats",
      },
    },
    { $unwind: "$affiliateStats" },
  ]);

  // console.log(userWithStats);
  const saleTransactions = await Promise.all(
    userWithStats[0].affiliateStats.affiliateSales.map((id) => {
      return Transaction.findById(id);
    })
  );
  const filteredSaleTransactions = saleTransactions.filter(
    (transaction) => transaction !== null
  );

  res
    .status(200)
    .json({ user: userWithStats[0], sales: filteredSaleTransactions });
};

module.exports = { getAdmins, userStats };
