const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.route('/').get(userController.list);
router.route('/').post(userController.signup);

module.exports = router;
