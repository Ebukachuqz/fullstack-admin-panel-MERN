const express = require("express");
const { getSalesStat } = require("../controllers/salesController");
const router = express.Router();

router.route("/sales-stat").get(getSalesStat);

module.exports = router;
