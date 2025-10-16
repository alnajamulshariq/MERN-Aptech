require('./connection');
const express = require('express');
const cors = require('cors');
const student = require('./student');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});

app.post('/addstudent', (req, res) =>{
    student.create(req.body).then((std)=>{
        res.send(std);
    })
})

app.get('/students', (req, res) =>{
    student.find().then((std)=>{
        res.send(std);
    })
})

app.delete('/deletestudent/:id', (req, res) =>{
    student.findByIdAndDelete(req.params.id).then((std)=>{
        res.send(std);
    })
})

app.put('/updatestudent/:id', (req, res) =>{
    student.findByIdAndUpdate(req.params.id, req.body).then((std)=>{
        res.send(std);
    })
})