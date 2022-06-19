/* This is the default path for the project's Express.js backend which is written in Node.js by J. A. */

// Initailizing Express.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Initializing Server
const app = express();

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// Setting Client Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Middleware for parsing through JSONs
app.use(bodyParser.json()),
app.use(bodyParser.urlencoded({ extended: false }));

// Generate URL extensions for client-side
app.use('/', index);
app.use('/api/', steps);

// Listening to localhost port
app.listen(port, function() {
    console.log('listening on port '+port);
});