
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Admin123",
    database:"car_service_app"
});

console.log('MySQL pool created');

module.exports = db;

// const sql = require('mssql');

// const config = {
//     server: 'PIKACHU\\SQLEXPRESS',
//     database: 'CarServiceDB',
//     options: {
//         trustServerCertificate: true,
//         trustedConnection: true
//     }
// };

// sql.connect(config)
//     .then(() => console.log('✅ Connected to SQL Server'))
//     .catch(err => console.log('❌ Connection failed:', err));




