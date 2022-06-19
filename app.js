/* Backend Express Server by J. A. */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// to connect to external endpoints safely
const passport = require('passport');
// adding mongoose
const mongoose = require('mongoose');

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

// Root Index Route
app.get('/', (req, res) => {
    res.send('Index. The root route.');
});

// Lets developper know in terminal that the server is running
app.listen(port, () => {
    console.log('listening on port '+port);
});