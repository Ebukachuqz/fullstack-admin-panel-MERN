const Product = require("../models/Product");
const ProductStat = require("../models/ProductStat");
const Transaction = require("../models/Transaction");
const User = require("../models/User");

const getAllProductsWithStats = async (req, res) => {
  const products = await Product.find();

  // get stats for each product returned
  const productsWithStats = await Promise.all(
    products.map(async (product) => {
      const stat = await ProductStat.find({ productId: product._id });
      return {
        ...product._doc,
        stat,
      };
    })
  );

  return res.status(200).json(productsWithStats);
};

const getCustomers = async (req, res) => {
  const customers = await User.find({ role: "user" }).select("-password");
  res.status(200).json(customers);
};

const getTransactions = async (req, res) => {
  const { sort = null, search = "", page = 1, pageSize = 20 } = req.query;
  // sort format from req.query should be {"field": "userId" || "cost", "sort":"desc"||"asc"}

  const formatSortQuery = () => {
    const parsedSort = JSON.parse(sort);
    return { [parsedSort.field]: parsedSort.sort === "desc" ? -1 : 1 };
  };

  const sortQuery = Boolean(sort) ? formatSortQuery() : {};

  // query db
  const transactions = await Transaction.find({
    $or: [
      { cost: { $regex: new RegExp(search, "i") } },
      { userId: { $regex: new RegExp(search, "i") } },
    ],
  })
    .sort(sortQuery)
    .skip(page * pageSize)
    .limit(pageSize);

  const total = await Transaction.countDocuments({
    name: { $regex: search, $options: "i" },
  });
  res.status(200).json({
    transactions,
    total,
  });
};

module.exports = { getAllProductsWithStats, getCustomers, getTransactions };
