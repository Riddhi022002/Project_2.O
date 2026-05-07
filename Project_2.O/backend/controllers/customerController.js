const db = require("../config/db");
const supabase = require("../config/supabaseClient");
const { getCarsByCustomerId}=require("../models/carModel");
const { getCustomerById}=require("../models/customerModel");

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

const getCustomerDetailsbyId =  async (req, res) => {
  try {
    const { customerid } = req.params;
    const rows = await getCustomerById(customerid);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching services" });
  }
};

module.exports = {getAllCarsByCustomerId, getCustomerDetailsbyId};
