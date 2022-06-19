/* Here is the Express Router for routing urls.
&& These are the Express.js routes for users */
const express = require('express');
const router = express.Router();
const User = require('./../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// Registration - for constructing a new user
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

// Authentication logic
router.post('/auth', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    // if/else statement for error handling and displaying content && token handling
    User.getUserByUsername(username, (error, user) => {
        if(error) throw error; {
            if(!user) {
                return res.json({ success: false, message: 'User not found'});
            }; User.comparePassword(password, user.password, (error, isMatch) => {
                if(error) throw error;
                if(isMatch) {
                    const token = jwt.sign(user, config.secret, {
                        expiresIn: 604800 // set to expire in a week
                    });
                    res.json({
                        success: true,
                        token: 'JWT '+token,
                        user: {
                            id: user._id,
                            name: user.name,
                            username: user.username,
                            email: user.email
                        }
                    });
                } else {
                    return res.json({ success: false, message: 'Password incorrect'});
                }
            });
    };
});

// Profile - adding passport to authenticate
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});

// Auth notes by J. A.

// Make sure that token returned in console is added to .env file appropriately as a variable to be used here - to keep the token private.

// Make sure that .gitignore ignores .env as well as other files that it should ignore - such as node_modules and any secret .env variables such as tokens, secrets and keys.

// Environment variables can also be added to Postman API and to MongoDB - make sure to also store permitted ip addresses in MongoDB settings for database.

// Validation
router.get('/validate', (req, res, next) => {
    res.send('Validated, successfully. :)');
})});

module.exports = { router };