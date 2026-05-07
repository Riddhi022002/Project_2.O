const express = require("express");
const router = express.Router();
const {getAllCarsByCustomerId} = require("../controllers/customerController")

router.get("/getCarsByCustomerId/:customerid", getAllCarsByCustomerId);

module.exports = router;