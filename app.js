require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')
const routes = require("./routes/index");

const connectDB = require('./server/config/db');

const mongoose = require('mongoose');

const app = express();
const PORT = 5000 || process.env.PORT;

//Connect Database
connectDB();

app.use(express.static('public'));

//Template engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());

const roomTypeSchema = new mongoose.Schema({
  name: String
});

const RoomType = mongoose.model('RoomType', roomTypeSchema);

// Define Schema for Room
const roomSchema = new mongoose.Schema({
  name: String,
  roomType: {
    type: mongoose.Schema.Types.String,
    ref: 'RoomType'
  },
  price: Number
});

const Room = mongoose.model('Room', roomSchema);

// POST Endpoint for Storing Room Type
app.post('/api/v1/rooms-types', async (req, res) => {
  try {
    const roomType = await RoomType.create(req.body);
    res.status(201).json(roomType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
});

// GET Endpoint for Fetching All Room Types
app.get('/api/v1/rooms-types', async (req, res) => {
  try {
    const roomTypes = await RoomType.find();
    res.json(roomTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST Endpoint for Storing Rooms
app.post('/api/v1/rooms', async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET Endpoint for Fetching All Rooms with Optional Filters
app.get('/api/v1/rooms', async (req, res) => {
  try {
    let query = {};
    if (req.query.search) {
      query.name = new RegExp(req.query.search, 'i');
    }
    if (req.query.roomType) {
      query.roomType = req.query.roomType;
    }
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) {
        query.price.$gte = req.query.minPrice;
      }
      if (req.query.maxPrice) {
        query.price.$lte = req.query.maxPrice;
      } else {
        query.price.$gte = 0;
      }
    }
    const rooms = await Room.find(query);
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH Endpoint for Editing a Room
app.patch('/api/v1/rooms/:roomId', async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, { new: true });
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE Endpoint for Deleting a Room
app.delete('/api/v1/rooms/:roomId', async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.roomId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET Endpoint for Fetching a Room by its ID
app.get('/api/v1/rooms/:roomId', async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
