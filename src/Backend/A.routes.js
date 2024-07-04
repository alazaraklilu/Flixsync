// routing to different endpoints
// Purpose: Routers in Express.js define the endpoints (routes) that the server will respond to. 
// They map URLs to specific request handlers.
// Functionality: They listen for incoming HTTP requests (e.g., GET, POST, PUT, DELETE) 
// and delegate the processing of these requests to the appropriate controller functions.

const express = require('express');
const router = express.Router();

// Define routes and map them to controller functions

// Login routes 

router.get('/users', controller)
router.post('/users', controller)
router.get('/users/:id', controller)
router.get('/users/:id', controller)
