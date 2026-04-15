const express = require('express');
const router = express.Router();

const { registerCustomer, registerVendor, loginCustomer, loginVendor } = require('../controllers/authController');

// Customer route
router.post('/customer/register', registerCustomer);
router.post('/customer/login', loginCustomer);

// Vendor route
router.post('/vendor/register', registerVendor);
router.post('/vendor/login', loginVendor);

module.exports = router;