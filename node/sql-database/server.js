require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./src/db');
const userRouter = require('./src/routes/user');
const recipeRouter = require('./src/routes/recipe');

// const testConnection = require('./src/db');

const port = process.env.PORT || 8000;

// testConnection();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/users', userRouter);
app.use('/users/:userId/recipes', recipeRouter);

sequelize.sync();

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
