const Task = require('../models/tasks.model');

module.exports = {
  async greet(req, res) {
    res.status(200).json({ message: 'hello world '});
  },
  async create(req, res) {
    console.log('here')
    try {
      await Task.create(req.body);

      const tasks = await Task.find();

      res.status(200).json(tasks);
    } catch(error) {
      res.status(400).json({ message: 'Algo salió mal' })
    }
  }
}
