require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { formData } = require('./middleware');


const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/', formData, (req, res) => {
  console.log(req.body);
  // const { name, file } = req.body;

  // User.create({ name, avatar: file.secure_url });
  res.send('Hello world');
});

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
