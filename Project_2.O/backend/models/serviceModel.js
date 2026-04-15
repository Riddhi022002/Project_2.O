const db = require('../config/db');

const FetchAdminDefinedServices = async () => {
   const [rows] = await db.execute(
        "SELECT SERVICEID as id, SERVICENAME as name FROM SERVICE"
);
    return rows;
};

const createVendorService = async (data) => {
    const {vendor_id,service} = data;

    const [result] =  await db.execute(
          `INSERT INTO VENDOR_SERVICE (VENDORID, SERVICEID, PRICE)
           VALUES (?, ?, ?)`,
          [vendor_id, service.service_id, service.price]
        );
    return result.insertId;
};

module.exports = { createVendorService ,FetchAdminDefinedServices};