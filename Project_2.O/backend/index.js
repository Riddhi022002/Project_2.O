var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin123",
  database:"car_service_app"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // Define the SQL query here:
  const sql = "CREATE DATABASE IF NOT EXISTS car_service_app";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: ", result);
  });
});