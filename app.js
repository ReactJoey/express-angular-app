/* Backend Express Server by J. A. */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// to make API calls from Frontend
const cors = require('cors');
// to connect to external endpoints safely
const passport = require('passport');
// adding mongoose
const mongoose = require('mongoose');

const app = express();

// Sets the port to localhost:3000
const port = 3000;

app.get('/', (req, res) => {
    res.send('Error. Not found.');
});

// Lets developper know in terminal that the server is running
app.listen(port, () => {
    console.log('listening on port '+port);
});