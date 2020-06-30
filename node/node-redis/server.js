require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const redis = require('redis');

const port = process.env.PORT || 8000;

const app = express();

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  // db: process.env.REDIS_DB,
  // password: process.env.REDIS_PASSWORD
});
client.on('connect', () => console.log('connection established successfully'));

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  client.get('name', (err, reply) => {
    console.log(err, reply);
  });
});

app.post('/', (req, res) => {
  client.set('name', 'Simon', (err, reply) => {
    console.log(err, reply)
    if(reply === 'OK') {
      res.sendStatus(200);
    }
  });
});

app.get('/greeting', (req, res) => {
  client.hget('person', 'name', (err, reply) => {
    console.log(err, reply)
  })
});

app.post('/greeting', (req, res) => {
  client.hset('person', 'name', 'Juan', (err, reply) => {
    console.log(err, reply);
    if(reply >= 0) {
      res.sendStatus(200);
    }
  });
});

// app.post('/login', (req, res) => {
//   const user = User.findOne({});
//   client.set('currentUser', user)
// });

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
