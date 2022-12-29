const express = require("express");
const {
  getUserById,
  getDashboardData,
} = require("../controllers/generalController");
const router = express.Router();

router.route("/user/:id").get(getUserById);
router.route("/dashboard").get(getDashboardData);

module.exports = router;
