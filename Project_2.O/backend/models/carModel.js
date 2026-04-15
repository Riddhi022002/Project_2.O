const db = require('../config/db');

const createCar = async (car) => {
    const { customer_id, brand, model, registration_number } = car;

    console.log("Car Data:", {
    customer_id,
    brand,
    model,
    registration_number
    });

    await db.execute(
        `INSERT INTO VEHICLE (CUSTOMERID, VEHICLEBRANDNAME, VEHICLEMODELNAME,VEHICLEREGISTRATIONNUMBER)
         VALUES (?, ?, ?, ?)`,
        [customer_id, brand, model, registration_number]
    );
};

module.exports = { createCar };