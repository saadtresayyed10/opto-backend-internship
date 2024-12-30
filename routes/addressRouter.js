const express = require("express");
const {
  addAddress,
  getAllAddress,
  getSingleAddress,
} = require("../controller/addressController");
const router = express.Router();

router.post("/", addAddress);
router.get("/", getAllAddress);
router.get("/:id", getSingleAddress);

module.exports = router;
