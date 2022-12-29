const express = require("express");
const { getAdmins, userStats } = require("../controllers/managementController");
const router = express.Router();

router.route("/admins").get(getAdmins);
router.route("/performance/:id").get(userStats);

module.exports = router;
