const express = require('express');
const cors = require('cors');
const uuid = require('uuid-random');

const app = express();
app.use(cors()); // Cross Origin Resources Sharing
app.use(express.json());

let users = [];

// CRUD - Create Read Update Delete

// GET /
// POST /
// GET /:id
// PUT /:id
// DELETE /:id

app.get('/', (req,res) => {
  console.log(req);
  res.status(200).json(users)
});

app.post('/', (req, res) => {
  const user = { ...req.body, id: uuid() };
  users.push(user);
  res.status(200).json(user);
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = users.filter(user => user.id === id)[0];

  if(user) {
    res.status(200).json(user);
  } else {
    res.sendStatus(404);
  }
});

app.put('/:id', (req, res) => {
  const id = req.params.id;

  let changedUser;
  users.forEach((user, i) => {
    if(user.id === id) {
      changedUser = {
        ...user,
        ...req.body
      };
      users[i] = changedUser;
    }
  });

  res.status(200).json(changedUser);
});

app.delete('/:id', (req, res) => {
  const id = req.params.id;

  users = users.filter(user => user.id !== id);

  res.sendStatus(200);
})

app.listen(3000, () => console.log('Running on port 3000'));
