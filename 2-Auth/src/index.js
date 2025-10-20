require('./connection');
const express = require('express');
const user = require('./user');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) =>{
    user.create(req.body).then(()=>{
        res.send('User Registered');
    })
});

app.post('/login', (req, res) =>{
    user.findOne({email: req.body.email}).then((response) =>{
        if(response.password === req.body.password){
            res.send('Login Successful');
        } else {
            res.send('Login Failed');
        }
    }).catch(() =>{
        res.send('User Not Found');
    });
});

app.listen(port);