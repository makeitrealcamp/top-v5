const User = require('../models/user.model');

// CRUD
const userController = {
  list(req, res) {
    User
      // .find({ name: 'Simon' })
      // .findOne({ name: 'Simon' })
      .find()
      .then((users) => res.status(200).json(users))
      .catch((error) => res.status(500).json(error));
  },
  create: function create(req, res) {
    const data = req.body;
    User
      .create(data)
      .then((user) => res.status(200).json(user))
      .catch((error) => res.status(400).json(error));
  },
  show(req, res) {
    const { id } = req.params;
    User
      .findById(id)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  },
  edit(req, res) {
    const { id } = req.params;
    const data = req.body;
    const options = {
      new: true,
      useFindAndModify: false
    };

    User
      .findByIdAndUpdate(id, data, options)
      .then((user) => res.status(200).json(user))
      .catch((error) => res.status(400).json(error))
  },
  destroy(req, res) {
    const { id } = req.params;

    User
      .findByIdAndDelete(id)
      .then((user) => res.status(200).json(user))
      .catch((error) => res.status(400).json(error));
  }
};

module.exports = userController;
