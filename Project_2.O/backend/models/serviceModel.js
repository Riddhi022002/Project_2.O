const db = require('../config/db');

const FetchAdminDefinedServices = async () => {
   const [rows] = await db.execute(
        "SELECT SERVICEID as id, SERVICENAME as name, ICON as serviceicon FROM SERVICE"
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

const FetchServicesByVendorId = async (vendorId) => {
   const [rows] = await db.execute(
        "SELECT VS.VENDORSERVICEID as id, S.SERVICENAME as service_name, VS.PRICE as price, S.SERVICEDESCRIPTION as description FROM SERVICE S inner join VENDOR_SERVICE VS ON S.SERVICEID = VS.SERVICEID where VENDORID=?",[vendorId]
        ,[vendorId]);
    return rows;
};

module.exports = { createVendorService ,FetchAdminDefinedServices, FetchServicesByVendorId};