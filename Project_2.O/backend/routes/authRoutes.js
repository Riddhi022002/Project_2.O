const express = require('express');
const router = express.Router();
const db = require('../database/db');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const saltRounds = 10;

router.post('/register', async (req, res) => {
    console.log(req.body);  // Log the body to ensure it's populated correctly
  
    const { phone, email, password } = req.body;
  
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      const query = 'INSERT INTO users (phone, email, password, user_type, status) VALUES (?, ?, ?, ?, ?)';
      db.query(query, [phone, email, hash, 'customer', 'active'], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'User registered successfully' });
      });
    } catch (err) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
// 🔑 Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    if (results.length === 0) return res.status(401).json({ error: 'User not found' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  });
});

module.exports = router;
