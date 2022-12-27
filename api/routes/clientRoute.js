const express = require("express");
const { getAllProductsWithStats } = require("../controllers/clientController");
const router = express.Router();

router.route("/products").get(getAllProductsWithStats);

module.exports = router;
