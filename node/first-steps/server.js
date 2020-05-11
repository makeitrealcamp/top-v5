// CommonJS
// const { otherFile } = require('./path/to/other/file');

// module.exports = express;
// module.exports = { otherFile, moreFile }

const express = require('express');

const app = express();

app.get('/', (request, response) => {
  // response.json({ name: 'Simon' });
  response.status(201).json([1,2,3,4,5]);
  // axios
  // response.data -> [1,2,3,4,5]
  // response.data[1] -> 2
});

app.get('/greet/:name', (req, res) => {
  res.status(200).send(`Hola ${req.params.name}`);
});

// JSON.stringify({ name: 'Simon' }); // "{ "name": "Simon" }"
// JSON.parse('{ "name": "Simon" }'); // { name: 'Simon' }

// JSON - JavaScript Object Notation
// {
//   "name": "Simon",
//   // Comments are not allowed
//   "working": true,
//   "age": 28,
// }

app.listen(3000, () => console.log('App listening on port 3000'));
