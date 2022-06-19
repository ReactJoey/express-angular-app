/* Here is the Express Router for routing urls.
&& These are the Express.js routes for users */
const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Registration - constructing a new user
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    // if/else statement: success or error
    User.addUser(newUser, (e, user) => {
        if(e) {
            res.json({ success: false, message: 'Registration failed. Please try again.' });
        } else {
            res.json({ success: true, message: 'You are now registered. :)' });
        }
    });
    res.send('Please register!');
});

// Authentication
router.get('/auth', (req, res, next) => {
    res.send('Please authenticate. :)');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('Profile page.');
});

// Validation
router.get('/validate', (req, res, next) => {
    res.send('Validated, successfully. :)');
});

module.exports = router;