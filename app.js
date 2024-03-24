const dotenv = require("dotenv")
dotenv.config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const routes = require('./routes/routes');
const authRoutes = require('./routes/authRoutes');


// Initialize Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/api/v1', routes);
app.use('/api/v1', authRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});