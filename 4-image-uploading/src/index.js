require('./connection');
const express = require('express');
const multer = require('multer');
const user = require('./user');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'react-file-uploading/public/images/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post("/upload", upload.single("image"), (req, res) => {
    const {name, email, age} = req.body;
    const image = req.file.filename;
    const newUser = user({
        name,
        email,
        Age: age,
        image
    });
    newUser.save();
    res.send("added");
})