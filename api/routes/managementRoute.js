const express = require("express");
const { getAdmins } = require("../controllers/managementController");
const router = express.Router();

router.route("/admins").get(getAdmins);

module.exports = router;
