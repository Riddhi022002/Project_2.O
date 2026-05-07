const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require("./routes/serviceRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const customerRoutes = require("./routes/customerRoutes");

app.use("/api/services", serviceRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/vendor",vendorRoutes);
app.use("/api/customer",customerRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
