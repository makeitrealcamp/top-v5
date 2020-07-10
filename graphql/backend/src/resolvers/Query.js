const users = require('./data');

module.exports = {
  firstRequest() {
    return 'hola mundo';
  },
  users() {
    return users;
  },
  user(id) {
    return users.filter(user => user.id)[0];
  }
}
