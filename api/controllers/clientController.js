const Product = require("../models/Product");
const ProductStat = require("../models/ProductStat");
const Transaction = require("../models/Transaction");
const User = require("../models/User");
const getCountryIso3 = require("country-iso-2-to-3");

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

const getUsersGeoLocation = async (req, res) => {
  const users = await User.find();

  const mappedLocations = users.reduce((acc, { country }) => {
    // convert country ISO2 format from DB to ISO3
    const countryISO3 = getCountryIso3(country);
    // check if a key has been created for the ISO3 in the accumulator object
    if (!acc[countryISO3]) {
      acc[countryISO3] = 0;
    }
    acc[countryISO3]++;

    return acc;
  }, {});

  // format mappedLocations object to FOrmat needed by Nivo API
  const formattedMappedLocations = Object.entries(mappedLocations).map(
    ([country, count]) => {
      return { id: country, value: count };
    }
  );
  res.status(200).json(formattedMappedLocations);
};

module.exports = {
  getAllProductsWithStats,
  getCustomers,
  getTransactions,
  getUsersGeoLocation,
};
