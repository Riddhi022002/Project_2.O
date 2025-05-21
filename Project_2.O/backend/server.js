const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes');
const vendorRegistrationRoutes = require('./routes/vendorRegistrationRoutes');

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/vendors', vendorRegistrationRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
