const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  password: String,
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;
