/* Backend Express Server by J. A. */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// to connect to external endpoints safely
const passport = require('passport');
// adding mongoose + connecting to database
const mongoose = require('mongoose');
const config = require('./config/database');

// connects to mongodb database
mongoose.connect(config.database);

// on connect - console logs confirmation
mongoose.connection.on('connected', () => {
    console.log('You are now connected to the database '+config.database);
});

// error handling message in console for development purposes
mongoose.connection.on('error', (e) => {
    console.log('Error connecting to the database. '+e);
});

const app = express();

// Created for Users Routes
const users = require('./routes/users');

// Sets the port to localhost:3000
const port = 3000;

// allows external API requests to be made
// lookup CORS Policy for more
app.use(cors());

// Middleware to parse JSONs
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Root (Index) Route
app.get('/', (req, res) => {
    res.send('Root.');
});

// Redirects errant requests to root
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Lets developper know in terminal that the server is running
app.listen(port, () => {
    console.log('listening on port '+port);
});