const express = require("express");
const router = express.Router();
const { getAllServices } = require("../controllers/serviceController");

router.get("/fetchservices", getAllServices);

module.exports = router;