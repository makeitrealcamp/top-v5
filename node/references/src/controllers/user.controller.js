const User = require('../models/user.model');
const { sum } = require('../utils/helpers');

module.exports = {
  async list(req, res) {
    const users = await User.find().populate('posts');
    res.status(200).json(users)
  },
  async signup(req, res) {
    const user = await User.create(req.body);
    res.status(200).json(user);
  }
}
