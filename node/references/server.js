require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./src/db');
const userRouter = require('./src/routes/user');
const postRouter = require('./src/routes/post');

const port = process.env.PORT || port;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
