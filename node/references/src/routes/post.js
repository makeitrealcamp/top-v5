const router = require('express').Router();
const postController = require('../controllers/post.controller');

// GET /posts/
router.route('/').get(postController.list);
// POST /posts/
router.route('/').post(postController.create);
// GET /posts/:postId
router.route('/:postId').get(postController.show);
// PUT /posts/:postId
router.route('/:postId').put(postController.update);
// DELETE /posts/:postId
router.route('/:postId').delete(postController.destroy);

module.exports = router;
