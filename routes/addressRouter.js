const express = require("express");
const {
  addAddress,
  getAllAddress,
  getSingleAddress,
  updateAddress,
} = require("../controller/addressController");
const router = express.Router();

router.post("/", addAddress);
router.get("/", getAllAddress);
router.get("/:id", getSingleAddress);
router.put("/:id", updateAddress);

module.exports = router;
