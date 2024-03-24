// routes/routes.js

const express = require('express');
const router = express.Router();

// Import middleware
const authenticateToken = require('../middleware/authenticateToken');
const authorizeRoles = require('../middleware/authorizeroles');
const validateData = require('../middleware/validatedata');

// Import routes
const authRoutes = require('./authRoutes'); // Import authentication routes

// Import controllers
const RoomController = require('../controllers/RoomController');
const UserController = require('../controllers/UserController');

// Use authentication routes


// Define other routes
router.get('/rooms', authenticateToken, RoomController.getAllRooms);
router.post('/rooms', authenticateToken, authorizeRoles('admin'), validateData, RoomController.createRoom);
router.get('/rooms/:id', authenticateToken, RoomController.getRoomById);
router.put('/rooms/:id', authenticateToken, authorizeRoles('admin'), validateData, RoomController.updateRoom);
router.delete('/rooms/:id', authenticateToken, authorizeRoles('admin'), RoomController.deleteRoom);

router.get('/users', authenticateToken, UserController.getAllUsers);
router.get('/users/:id', authenticateToken, UserController.getUserById);
router.put('/users/:id', authenticateToken, UserController.updateUser);
router.delete('/users/:id', authenticateToken, UserController.deleteUser);

module.exports = router;
