const express = require("express");
const {
  getAllProductsWithStats,
  getCustomers,
  getTransactions,
  getUsersGeoLocation,
} = require("../controllers/clientController");
const router = express.Router();

router.route("/products").get(getAllProductsWithStats);
router.route("/customers").get(getCustomers);
router.route("/transactions").get(getTransactions);
router.route("/geolocation").get(getUsersGeoLocation);

module.exports = router;
