const express = require("express");
const { verify } = require("../controllers/verify.controller");
const router = express.Router();

router.route("/").post(verify);

module.exports = router;
