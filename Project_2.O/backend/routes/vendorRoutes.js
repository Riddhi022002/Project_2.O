const express = require("express");
const router = express.Router();
const {getAllVendors, 
    getVendorServicesByService, 
    getVendorServicesById, 
    getVendorById,
    getVendorServicesByVendorId} = require("../controllers/vendorController")

router.get("/getAllVendors", getAllVendors);
router.get("/vendorsServicesByService/:serviceId", getVendorServicesByService);
router.get("/vendorServiceById/:VendorServiceId", getVendorServicesById);
router.get("/VendorById/:VendorId", getVendorById);
router.get("/VendorServicesByVendorId/:VendorId", getVendorServicesByVendorId);

module.exports = router;