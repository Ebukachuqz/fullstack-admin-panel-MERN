const express = require("express");
const { getUserById } = require("../controllers/generalController");
const router = express.Router();

router.route("/user/:id").get(getUserById);

module.exports = router;
