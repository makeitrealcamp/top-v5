const router = require('express').Router({ mergeParams: true });
const recipeController = require('../controllers/recipe.controller');

router.route('/').get(recipeController.list);
router.route('/').post(recipeController.create);
// router.route('/:id').get(recipeController.show);
// router.route('/:id').put(recipeController.update);
// router.route('/:id').delete(recipeController.delete);

module.exports = router;
