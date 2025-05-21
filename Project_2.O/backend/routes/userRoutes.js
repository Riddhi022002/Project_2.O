const express = require('express');
const router = express.Router();

// Example user route
router.get('/profile', (req, res) => {
  res.json({ message: "User profile route working!" });
});

module.exports = router;
