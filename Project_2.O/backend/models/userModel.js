const db = require('../database/db');

exports.findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query("CALL login_user(?)", [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0][0]); // first row
    });
  });
};
