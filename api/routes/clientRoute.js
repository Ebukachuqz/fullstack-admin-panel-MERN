const express = require("express");
const {
  getAllProductsWithStats,
  getCustomers,
  getTransactions,
} = require("../controllers/clientController");
const router = express.Router();

router.route("/products").get(getAllProductsWithStats);
router.route("/customers").get(getCustomers);
router.route("/transactions").get(getTransactions);

module.exports = router;
