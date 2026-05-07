const db = require("../config/db");
const { fetchVendors } = require("../models/vendorModel");

const getAllVendors = async (req, res) => {
  try {
    const rows = await fetchVendors();

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching Vendors" });
  }
};

const getVendorServicesByService = async (req, res) => {
  const { serviceId } = req.params;

  try {
    const [rows] = await db.query(
      `
      SELECT DISTINCT v.*,vs.*
      FROM vendor v
      JOIN vendor_service vs ON v.VENDORID = vs.VENDORID
      WHERE vs.SERVICEID = ?
      `,
      [serviceId],
    );

    res.json(rows);
  } catch (error) {
    console.error("Error fetching vendors by service:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getVendorServicesById = async (req, res) => {
  const { VendorServiceId } = req.params;

  console.log(VendorServiceId);
  console.log("Working");
  try {
    const [rows] = await db.query(
      `
      
SELECT DISTINCT vs.*
      FROM vendor v
      JOIN vendor_service vs ON v.VENDORID = vs.VENDORID
      WHERE vs.VENDORSERVICEID = ?

      `,
      [VendorServiceId],
    );

    res.json(rows);
  } catch (error) {
    console.error("Error fetching vendors by service:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getVendorById = async (req, res) => {
  const { VendorId } = req.params;

  try {
    const [rows] = await db.query(
      `SELECT DISTINCT *
      FROM vendor 
      WHERE VENDORID = ?`,
      [VendorId],
    );

    console.log("Vendor");
    console.log(rows);

    res.json(rows);
  } catch (error) {
    console.error("Error fetching details of the selected Vendor:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getVendorServicesByVendorId = async (req, res) => {
  const { VendorId } = req.params;

  try {
    const [rows] = await db.query(
     ` SELECT DISTINCT vs.*
      FROM vendor v
      JOIN vendor_service vs ON v.VENDORID = vs.VENDORID
      WHERE v.VENDORID = ?`,
      [VendorId]
    );

console.log("VendorService");
console.log(rows);

    res.json(rows);
  } catch (error) {
    console.error("Error fetching services under the selected Vendor:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllVendors,
  getVendorServicesByService,
  getVendorServicesById,
  getVendorById,
  getVendorServicesByVendorId
};
