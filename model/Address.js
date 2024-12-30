const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  title: { type: String, required: true },
  houseNumber: { type: String, required: true },
  area: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Address", addressSchema);
