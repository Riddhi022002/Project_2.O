const db = require("../config/db");
const { FetchAdminDefinedServices } = require("../models/serviceModel");

const getAllServices = async (req, res) => {
  try {
    const rows = await FetchAdminDefinedServices();

    console.log(rows);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching services" });
  }
};

module.exports = { getAllServices };
