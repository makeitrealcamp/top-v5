const router = require('express').Router();
const userController = require('../controllers/user.controller');
const { auth } = require('../utils/middlewares');

router.route('/greet').get(auth, userController.greet);
router.route('/signup').post(userController.signup);
router.route('/signin').post(userController.signin);

module.exports = router;
