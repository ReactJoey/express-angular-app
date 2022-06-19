/* Feel free to check my git commits and pushes! - J. A. */

// To initialize express Router.
var express = require('express');
var router = express.Router();

// To output this string to the root index route.
router.get('/', function(req, res, next) {
    res.send('Welcome to the index page.')
});

// To make it importable/usable in other files.
module.exports = router;