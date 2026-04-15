const db = require('../config/db');

const createVendor = async (vendor) => {
    const { business_name,
      owner_name,
      phonenumber,
      address,
      city,
      state,
      pincode,
      gst_number,
      password} = vendor;

    const [result] = await db.execute(
  `INSERT INTO VENDOR 
   (BUSINESSNAME, OWNERNAME, PHONENUMBER, ADDRESSLINE, CITY, STATE, PINCODE, GSTNUMBER, PASSWORDHASH)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [business_name, owner_name, phonenumber, address, city, state, pincode, gst_number, password]
);

    return result.insertId;
};

const vendorLogin = async (phonenumber) => {

    const [rows] = await db.execute(
      "SELECT * FROM VENDOR WHERE PHONENUMBER = ?",
      [phonenumber]
    );

    return rows;
};

module.exports = { createVendor, vendorLogin };