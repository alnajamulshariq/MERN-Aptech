require('./connection');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./user');

app.use(bodyParser.json());
app.use(cors());


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.post('/register', (req, res) => {
    user.create(req.body).then(()=>{
        res.send("User registered successfully");
    })
})

// app.post('/login', (req, res) => {
//     user.findOne({ email: req.body.email })
//         .then((response) => {
//             if(response.pass === req.body.pass){
//                 res.send("login successful");
//             }
//             else{
//                 res.send("Invalid Credentials");
//             }
//         })
//         .catch(() => {
//             res.send("User not found");
//         });
// });

app.post('/login', (req, res) => {
    user.findOne({ email: req.body.email })
        .then((response) => {
            if (!response) {
                // Agar user nahi mila
                return res.send({ message: "User not found" });
            }

            if (response.pass === req.body.pass) {
                // Agar password match hua
                res.send({
                    message: "Login successful",
                    role: response.role,   // 👈 ye field frontend ko milegi
                    user: response          // optional, agar user data bhi chahiye
                });
            } else {
                res.send({ message: "Invalid Credentials" });
            }
        })
        .catch((err) => {
            console.error(err);
            res.send({ message: "Something went wrong" });
        });
});
