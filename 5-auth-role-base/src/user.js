const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    role: String
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;