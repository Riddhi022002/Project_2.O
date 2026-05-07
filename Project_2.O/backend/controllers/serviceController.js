const db = require("../config/db");
const supabase = require("../config/supabaseClient");
const { FetchAdminDefinedServices, createVendorService, FetchServicesByVendorId } = require("../models/serviceModel");

const getAllServices = async (req, res) => {
  try {
    const rows = await FetchAdminDefinedServices();

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching services" });
  }
};

const addVendorService = async (req, res) => {
  try {
    const {
      services
    } = req.body;
    // 2️⃣ Insert services
    if (services && services.length > 0) {
      for (let service of services) {
        await createVendorService({
          vendor_id: vendorId,
          service:service,
        });
      }
    }

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching services" });
  }
};

const getVendorServices = async (req, res) => {
  try {
    const { vendorId } = req.params;

     const rows = await FetchServicesByVendorId(vendorId);
     
     
    return res.status(200).json({
      services: rows,
    });

  } catch (error) {
    console.error("Error fetching vendor services:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {getAllServices, addVendorService, getVendorServices};
