const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rolebase_auth').then(()=>{
    console.log('Connected to MongoDB');
})