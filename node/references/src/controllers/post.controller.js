const Post = require('../models/post.model');
const User = require('../models/user.model');

module.exports = {
  async list(req, res) {
    const posts = await Post.find().populate('user', 'name');
    res.status(200).json(posts);
  },
  async create(req, res) {
    const userId = '5ec2a682e1742b11e37b0619';
    const user = await User.findById(userId);

    const post = await Post.create({ ...req.body, user });

    user.posts.push(post._id);
    await user.save();

    res.status(200).json(post);
  },
  async show(req, res) {
    const postId = req.params.postId;
    const post = await Post.findById(postId).populate('user', '-password');
    res.status(200).json(post);
  },
  async update(req, res) {
    const postId = req.params.postId;
    const options = {
      new: true,
      useFindAndModify: false
    };
    const post = await Post.findByIdAndUpdate(postId, req.body, options);
    res.status(200).json(post)
  },
  async destroy(req, res) {
    const postId = req.params.postId;
    const post = await Post.findByIdAndDelete(postId);
    res.status(200).json(post);
  }
}
