const db = require("../config/db");
const supabase = require("../config/supabaseClient");

const { createCustomer, customerLogin } = require("../models/customerModel");
const { createCar } = require("../models/carModel");
const { createVendor, vendorLogin } = require("../models/vendorModel");
const { createVendorService } = require("../models/serviceModel");

const bcrypt = require("bcrypt"); 



const registerCustomer = async (req, res) => {
  try {
    const { name, email, phone, password, cars } = req.body;

    // 1. Create customer
    const customerId = await createCustomer({
      name,
      email,
      phone,
      password,
    });

    if (!cars || cars.length === 0) {
      return res.status(400).json({ message: "At least one car is required" });
    }
    // 2. Insert MULTIPLE cars
    if (cars && cars.length > 0) {
      for (let car of cars) {
        await createCar({
          customer_id: customerId,
          brand: car.brand,
          model: car.model,
          registration_number: car.registration_number,
        });
      }
    }

    res.status(201).json({
      message: "Registration successful",
      customerId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering user" });
  }
};

const registerVendor = async (req, res) => {
  try {
    const {
      business_name,
      owner_name,
      phonenumber,
      address,
      city,
      state,
      pincode,
      gst_number,
      password,
      services
    } = req.body;

    // create Vendor
    const vendorId = await createVendor({
      business_name,
      owner_name,
      phonenumber,
      address,
      city,
      state,
      pincode,
      gst_number,
      password
    });

    // 2️⃣ Insert services
    if (services && services.length > 0) {
      for (let service of services) {
        await createVendorService({
          vendor_id: vendorId,
          service:service,
        });
      }
    }

    res.status(201).json({
      message: "Vendor registered successfully",
      vendorId
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering vendor" });
  }
};


const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if customer exists
    const rows = await customerLogin(email);
    console.log('data',rows);


    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const customer = rows;

    // 2. Compare password
    if (password !== customer.passwordhash) {
  return res.status(401).json({ message: "Invalid email or password" });
}

    // 3. Success response
    res.status(200).json({
      message: "Login successful",
      customer: {
        id: customer.customerid,
        name: customer.fullname,
        email: customer.email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login error" });
  }
};

const loginVendor = async (req, res) => {
  try {
    console.log(req.body);
    const { phonenumber, password } = req.body;

    // 1. Check if customer exists
    const rows = await vendorLogin(phonenumber);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid phone or password" });
    }

    const vendor = rows[0];

    // 2. Compare password
    if (password !== vendor.passwordhash) {
  return res.status(401).json({ message: "Invalid phone or password" });
}

    // 3. check is the vendor is verified
    if (vendor.isverified!==1) {
  return res.status(403).json({ message: "This vendor account is not verified, Application is under progress." });
}

    // 4. Success response
    res.status(200).json({
      message: "Login successful",
      vendor: {
        id: vendor.vendorid,
        name: vendor.businessname,
        phonenumber: vendor.phonenumber,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login error" });
  }
};


module.exports = { registerCustomer,registerVendor, loginCustomer, loginVendor};
