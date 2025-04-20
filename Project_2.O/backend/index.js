var mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const app = express(); 

app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin123",
  database:"car_service_app"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

//   // Define the SQL query here:
// // User ID you want to fetch
// const userId = 1;

// // Call the stored procedure
// con.query('CALL SP_GET_USER_DETAILS(?)', [userId], (err, results) => {
//   if (err) throw err;

//   // results[0] contains the actual result set
//   const userDetails = results[0];
//   console.log('User Details:', userDetails);
//});
});



app.get('/api/users', (req, res) => {
  con.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: 'DB Error' });
    res.json(results);
  });
});


app.listen(5000, () => {
  console.log('Backend running on port 5000');
});