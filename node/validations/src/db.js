const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost:27017/database', options);

const connection = mongoose.connection;

connection.once('open', () => console.log('Connection established successfully'));
connection.on('error', (error) => console.log('Something went wrong', error));

module.exports = connection;
