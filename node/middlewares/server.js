const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// HOF - High Order Function
function logger(config) {
  return function(req, res, next) {
    console.log(config);
    console.log('Requesting data');

    req.user = 'Simon';
    res.header('middleware', 'Hello middleware');

    next();
  }
}

function errorHandler(error, req, res, next) {
  console.error(error.stack);
  res.status(500).json({ message: 'Algo salió mal! Intenta de nuevo más tarde' });
}

const app = express();
app.use(cors());
app.use(express.json()); // Content-Type: application/json
app.use(express.urlencoded({ extended: false })); // Content-Type: application/x-www-form-urlenconded
app.use(morgan('dev'));
// app.use('/users', logger('hola'));
app.use(errorHandler);

app.get('/', logger('hola'), (req, res) => {
  console.log('user', req.user)
  res.sendStatus(200);
});

app.get('/users', logger('2'), (req, res) => {
  res.sendStatus(200);
});

app.get('/users/1', (req, res) => {
  res.sendStatus(200);
});

app.listen(8080, () => console.log('App running on http://localhost:8080'));
