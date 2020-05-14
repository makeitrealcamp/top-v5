const mongoose = require('mongoose');

function initDatabase() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect('mongodb://localhost:27017/auth', options);

  const { connection } = mongoose;

  connection.once('open', () => console.log('Connection established successfully'));
  connection.on('error', (err) => console.log('Something went wrong!', err));

  return connection;
}

module.exports = initDatabase;
