// routing to different endpoints
// Purpose: Routers in Express.js define the endpoints (routes) that the server will respond to. 
// They map URLs to specific request handlers.
// Functionality: They listen for incoming HTTP requests (e.g., GET, POST, PUT, DELETE) 
// and delegate the processing of these requests to the appropriate controller functions.

const express = require('express');
const { signUp, login } = require('./B.controllers'); // Ensure correct path to controllers
const router = express.Router();

// Sign up route 
router.post('/signup', (req, res, next) => {
    console.log('Sign Up Route Hit');
    next();
}, signUp);

// Login route
router.post('/login', (req, res, next) => {
    console.log('Login Route Hit');
    next();
}, login);

// Homepage route
router.post('/homepage', (req, res, next) => {
    console.log('Homepage Route Hit');
    next();
}, login);


module.exports = router;