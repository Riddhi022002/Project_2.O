const db = require('../config/db');

const createCustomer = async (customer) => {
    const { name, email, phone, password } = customer;

    const [result] = await db.execute(
        `INSERT INTO CUSTOMER (FULLNAME, EMAIL, PHONENUMBER, PASSWORDHASH)
         VALUES (?, ?, ?, ?)`,
        [name, email, phone, password]
    );

    return result.insertId;
};

const customerLogin = async (email) => {

    const [rows] = await db.execute(
      "SELECT * FROM CUSTOMER WHERE EMAIL = ?",
      [email]
    );

    return rows;
};

module.exports = { createCustomer, customerLogin };