const express = require('express');
const cors = require('cors');
const connection = require('./src/db');
const userController = require('./src/controllers/user.controller');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', userController.list);
app.post('/users', userController.create);
app.get('/users/:id', userController.show);
app.put('/users/:id', userController.edit);
app.delete('/users/:id', userController.destroy);

app.listen(8080, () => console.log('App running on http:localhost:8080'));
