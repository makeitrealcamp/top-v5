const router = require('express').Router();
const taskController = require('../controllers/task.controller');

router.route('/').get(taskController.greet);
router.route('/').post(taskController.create);

module.exports = router;
