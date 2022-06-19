/* Here is the Express Router for routing urls.
&& These are the Express.js routes for users */
const express = require('express');
const router = express.Router();

// Registration
router.get('/register', (req, res, next) => {
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