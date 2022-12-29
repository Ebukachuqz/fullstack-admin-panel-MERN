const OverallStat = require("../models/OverallStat");

const getSalesStat = async (req, res) => {
  const salesStat = await OverallStat.find();

  res.status(200).json(salesStat[0]);
};

module.exports = { getSalesStat };
