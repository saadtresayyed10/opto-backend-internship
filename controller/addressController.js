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

const getAllAddress = async (req, res) => {
  try {
    const address = await Address.find();
    res.status(200).json({ success: true, data: address });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getSingleAddress = async (req, res) => {
  try {
    const id = req.params.id;
    const address = await Address.findById(id);

    if (!address) {
      res.status(404).json({ message: "Provided id is incorrect" });
    }

    res.status(200).json({ success: true, data: address });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateAddress = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, houseNumber, area, location } = req.body;
    const address = { title, houseNumber, area, location };

    const updatedAddress = await Address.findByIdAndUpdate(id, address);

    if (!updatedAddress) {
      res.status(404).json({ message: "Address not found" });
    }

    res.status(201).json({ success: true, data: updatedAddress });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { addAddress, getAllAddress, getSingleAddress, updateAddress };
