const express = require("express");
const router = express.Router();
const { getAllServices, getVendorServices} = require("../controllers/serviceController");

router.get("/fetchservices", getAllServices);

router.get("/getVendorServices/:vendorId", getVendorServices);

module.exports = router;