const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        age: Number,
        city: String
    }
)

const studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel;