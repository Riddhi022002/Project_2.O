const db = require("../config/db");
const supabase = require("../config/supabaseClient");
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

  console.log('Serviceid passed:',serviceId);
  try {
    const { data, error } = await supabase
      .from("vendor_service")
      .select(`
        *,
        vendor (*),
        service (*)
      `)
      .eq("serviceid", serviceId);

    res.json(data);

  } catch (error) {
    console.error("Error fetching vendors by service:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getVendorServicesById = async (req, res) => {
  const { VendorServiceId } = req.params;

  try {
   const { data, error } = await supabase
  .from("vendor_service")
  .select(`
    *,
    service (*)
  `)
  .eq("vendorserviceid", VendorServiceId);

if (error) {
  console.error("Error fetching vendor service:", error);
  return res.status(500).json({ message: "Server error" });
}

res.json(data);

  } catch (error) {
    console.error("Error fetching vendors by service:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getVendorById = async (req, res) => {
  const { VendorId } = req.params;

  try {
    const { data, error } = await supabase
  .from("vendor")
  .select("*")
  .eq("vendorid", VendorId)
  .single();

res.json(data);
  } catch (error) {
    console.error("Error fetching details of the selected Vendor:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getVendorServicesByVendorId = async (req, res) => {
  const { VendorId } = req.params;

  try {
    const { data, error } = await supabase
  .from("vendor_service")
  .select(`
    *,
    service (*)
  `)
  .eq("vendorid", VendorId);


    res.json(data);
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
