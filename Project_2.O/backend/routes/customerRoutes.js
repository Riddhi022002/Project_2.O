const express = require("express");
const router = express.Router();
const {getAllCarsByCustomerId, getCustomerDetailsbyId} = require("../controllers/customerController")

router.get("/getCarsByCustomerId/:customerid", getAllCarsByCustomerId);
router.get("/getCustomerById/:customerid", getCustomerDetailsbyId);

module.exports = router;