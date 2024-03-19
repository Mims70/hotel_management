# hotel_management

# Hotel Management System

This is a hotel management system project designed to streamline room and reservation management in a hotel setting.

## Overview

The system allows for the management of room types, individual rooms, and reservations. It provides APIs for creating, updating, and deleting room types and rooms, as well as for retrieving room and reservation information.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## API Documentation

The following APIs are available:

- **POST** `/api/v1/rooms-types`: Create a new room type.
- **GET** `/api/v1/rooms-types`: Get all room types.
- **POST** `/api/v1/rooms`: Create a new room.
- **GET** `/api/v1/rooms`: Get all rooms with optional filters.
- **PATCH** `/api/v1/rooms/:roomId`: Update a room by ID.
- **DELETE** `/api/v1/rooms/:roomId`: Delete a room by ID.
- **GET** `/api/v1/rooms/:roomId`: Get a room by ID.
