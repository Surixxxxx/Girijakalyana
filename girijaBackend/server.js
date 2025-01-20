require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const app = express();


connectDB();


app.use(cors());
app.use(express.json());


app.use('/api', authRoutes);
app.use('/api/admin', adminRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
