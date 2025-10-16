const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/apicrud';
mongoose.connect(dbURI).then(() =>{
    console.log('MongoDB connected');
})