const express = require("express");
const router = express.Router();
const db = require("../database/db"); // Make sure this connects to MySQL properly

router.post("/register", async (req, res) => {
  const {
    userid,
    business_name,
    owner_name,
    address,
    city,
    state,
    pincode,
    gst_number,
  } = req.body;

   console.log('Incoming vendor data:', req.body); 
   
  try {
    const result = await db.execute(
      `INSERT INTO vendor (userid, business_name, owner_name, address, city, state, pincode, gst_number)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userid,
        business_name,
        owner_name,
        address,
        city,
        state,
        pincode,
        gst_number,
      ]
    );

    res.status(201).json({ message: "Vendor registered successfully" });
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
