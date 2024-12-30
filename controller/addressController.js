const Address = require("../model/Address");

const addAddress = async (req, res) => {
  try {
    const { title, houseNumber, area, location } = req.body;
    const newAddress = new Address({ title, houseNumber, area, location });
    await newAddress.save();
    res.status(201).json({ success: true, data: newAddress });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { addAddress };
