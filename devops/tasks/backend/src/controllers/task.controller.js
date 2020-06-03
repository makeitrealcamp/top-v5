const Task = require('../models/tasks.model');

module.exports = {
  async create(req, res) {
    await Task.create(req.body);

    const tasks = await Task.find();

    res.status(200).json(tasks);
  }
}
