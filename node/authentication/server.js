require('dotenv').config();
const express = require('express');
const cors = require('cors');
const initDatabase = require('./src/db.js');
const userRouter = require('./src/routes/user');

const port = process.env.PORT || 8080;

initDatabase();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
// app.use('/images', imagesRouter);
// app.use('/posts', postsRouter);

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
