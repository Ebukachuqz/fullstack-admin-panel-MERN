const OverallStat = require("../models/OverallStat");
const Transaction = require("../models/Transaction");
const User = require("../models/User");

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json(user);
};

const getDashboardData = async (req, res) => {
  // hardcoded values
  const currentMonth = "November";
  const currentYear = 2021;
  const currentDay = "2021-11-15";

  /* Recent Transactions */
  const transactions = await Transaction.find()
    .limit(50)
    .sort({ createdOn: -1 });

  /* Overall Stats */
  const overallStat = await OverallStat.find({ year: currentYear });

  const {
    totalCustomers,
    yearlyTotalSoldUnits,
    yearlySalesTotal,
    monthlyData,
    salesByCategory,
  } = overallStat[0];

  const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
    return month === currentMonth;
  });

  const todayStats = overallStat[0].dailyData.find(({ date }) => {
    return date === currentDay;
  });

  res.status(200).json({
    totalCustomers,
    yearlyTotalSoldUnits,
    yearlySalesTotal,
    monthlyData,
    salesByCategory,
    thisMonthStats,
    todayStats,
    transactions,
  });
};

module.exports = {
  getUserById,
  getDashboardData,
};
