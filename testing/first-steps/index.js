function sum(a, b) {
  return a + b;
}

function createUser(email, password) {
  return {
    email,
    password
  };
}

function working(working) {
  if (working) {
    return 'I\'m busy';
  } else {
    return 'I\'m available';
  }
}

module.exports = {
  sum,
  createUser,
  working
};
