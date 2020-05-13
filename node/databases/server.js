// localhost:27017
const express = require('express');
const cors = require('cors');
const initDatabase = require('./src/db.js');
const userController = require('./src/controllers/user.controller');

initDatabase();
const app = express();
app.use(cors());
app.use(express.json());

function greetController(req, res) {
  res.send('hello world')
}

app.get('/greet', greetController);

app.get('/users', userController.list);
app.post('/users', userController.create);
app.get('/users/:id', userController.show);
app.put('/users/:id', userController.edit);
app.delete('/users/:id', userController.destroy);


app.listen(8080, () => console.log(`App running on http://localhost:8080`));
