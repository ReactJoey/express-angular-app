const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../models/database');

// Schema for User
const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', UserSchema);

// User related callback functions to export
module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = { username: username };
    User.findOne(query, callback);
};

// Use bcrypt to salt password 10x and hash it.
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (e, salt) => {
        bcrypt.hash(newUser.password, salt, (e, hash) => {
            if(e) throw e;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};