const express = require("express");
const { addAddress } = require("../controller/addressController");
const router = express.Router();

router.post("/", addAddress);

module.exports = router;
