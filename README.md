# School Management API

## Overview

This project is a Node.js API for managing school data. It allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location. The API is built using the Express.js framework and MongoDB for database management.

## Hosted API and Postman Collection
- **Hosted API URL** `https://school-management-api-9md2.onrender.com`
- **Postman Collection** `Postman Collection Link`
## Features

- **Add School:** Add a new school with details such as name, address, latitude, and longitude.
- **List Schools by Proximity:** Retrieve a list of schools sorted by their proximity to a specified latitude and longitude.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing school data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

## Setup and Installation
### 1.Clone the repository:
```
git clone https://github.com/suranjit231/school-management-api.git
cd school-management-api
```
### 2. Install dependencies:
```
npm install
```
### 3. Set up environment variables:
  - Create a .env file in the root directory with the following variables:
```
PORT=3200
MONGODB_URI=your_mongodb_connection_string
```
### 4. Run the application:
```
node server.js
```

## API Endpoints

### 1. Add School

- **Endpoint**: `/api/school/addSchool`
- **Method**: `POST`
- **Description**: Adds a new school to the database.
- **Payload**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": "School Latitude",
    "longitude": "School Longitude"
  }

### 1. Get School list

- **Endpoint**: `/api/school/listSchools`
- **Method**: `GET`
- **Description**: Retrieves a list of schools sorted by proximity to the provided latitude and longitude.
- **Parameters**:
  - latitude (query parameter)
  - longitude (query parameter)
- **Example api**
```
 https://school-management-api-9md2.onrender.com/api/school/listSchools?latitude=40.7128&longitude=-74.0060
 ```
### Error Handling
  - The application uses a centralized error handling middleware that captures validation errors, MongoDB-specific errors, and custom application errors.

### Folder Structure
```
root
├── src
│   ├── config
│   │   └── connectMongodb.js  # MongoDB connection setup
│   ├── core
│   │   └── schoolManagement
│   │       ├── school.controller.js  # Controller logic
│   │       ├── school.router.js  # API routes
│   │       ├── school.repository.js  # Database queries
│   │       └── schoolSchema.js  # Mongoose schema
│   ├── middleware
│   │   └── errorHandler.middleware.js  # Error handling middleware
|
│── server.js  # Main server file
├── .env  # Environment variables
└── package.json  # Project dependencies and scripts
```


