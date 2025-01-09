const express = require('express');
const { signUp, login } = require('./B.controllers');
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
