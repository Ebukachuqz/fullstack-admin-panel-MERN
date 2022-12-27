const Product = require("../models/Product");
const ProductStat = require("../models/ProductStat");
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

module.exports = { getAllProductsWithStats, getCustomers };
