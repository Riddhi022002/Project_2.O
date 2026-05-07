const db = require("../config/db");
const { getCarsByCustomerId}=require("../models/carModel")

const getAllCarsByCustomerId = async (req, res) => {
  try {
    const { customerid } = req.params;
    const rows = await getCarsByCustomerId(customerid);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching services" });
  }
};

module.exports = {getAllCarsByCustomerId};
