const express = require("express");
const {
  getAllProductsWithStats,
  getCustomers,
} = require("../controllers/clientController");
const router = express.Router();

router.route("/products").get(getAllProductsWithStats);
router.route("/customers").get(getCustomers);

module.exports = router;
