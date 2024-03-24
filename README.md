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

# CONT'D OF LAST WEEK TASK

# User Authentication API

This Node.js API provides user authentication functionality using JSON Web Tokens (JWT).

## Introduction

The User Authentication API allows users to authenticate using their username and password. Upon successful authentication, the API issues a JSON Web Token (JWT) which can be used for subsequent requests requiring authentication.


To access the endpoint you can use the deployed link: [https://hotel-management-2.onrender.com/]

You'll have to login first with provided username and password using [https://hotel-management-2.onrender.com/api/v1/login]
 ```javascript
 const users = [
    { id: 1, username: 'Mims', password: 'Dembele', role: 'user' },
    { id: 2, username: 'Miracle', password: 'ansufati', role: 'admin' }
  ];
  ```
  After that you can acceess the following endpoints with the generated jwt token:
  #### Get All Rooms

- URL: `GET /rooms`
- Description: Retrieves a list of all rooms.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters: None
- Response:
  - Status Code: 200 (OK)
  - Body: List of rooms in JSON format

#### Create Room

- URL: `POST /rooms`
- Description: Creates a new room.
- Authentication: Required (JWT token)
- Authorization: Admin role required
- Parameters:
  - Request Body: Room data in JSON format
- Response:
  - Status Code: 201 (Created)
  - Body: Newly created room in JSON format

#### Get Room by ID

- URL: `GET /rooms/:id`
- Description: Retrieves a room by its ID.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters:
  - URL Path Parameter: Room ID
- Response:
  - Status Code: 200 (OK)
  - Body: Room details in JSON format

#### Update Room

- URL: `PUT /rooms/:id`
- Description: Updates a room by its ID.
- Authentication: Required (JWT token)
- Authorization: Admin role required
- Parameters:
  - URL Path Parameter: Room ID
  - Request Body: Updated room data in JSON format
- Response:
  - Status Code: 200 (OK)
  - Body: Updated room details in JSON format

#### Delete Room

- URL: `DELETE /rooms/:id`
- Description: Deletes a room by its ID.
- Authentication: Required (JWT token)
- Authorization: Admin role required
- Parameters:
  - URL Path Parameter: Room ID
- Response:
  - Status Code: 204 (No Content)

### Users

#### Get All Users

- URL: `GET /users`
- Description: Retrieves a list of all users.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters: None
- Response:
  - Status Code: 200 (OK)
  - Body: List of users in JSON format

#### Get User by ID

- URL: `GET /users/:id`
- Description: Retrieves a user by their ID.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters:
  - URL Path Parameter: User ID
- Response:
  - Status Code: 200 (OK)
  - Body: User details in JSON format

#### Update User

- URL: `PUT /users/:id`
- Description: Updates a user by their ID.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters:
  - URL Path Parameter: User ID
  - Request Body: Updated user data in JSON format
- Response:
  - Status Code: 200 (OK)
  - Body: Updated user details in JSON format

#### Delete User

- URL: `DELETE /users/:id`
- Description: Deletes a user by their ID.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters:
  - URL Path Parameter: User ID
- Response:
  - Status Code: 204 (No Content)
  