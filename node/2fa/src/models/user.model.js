const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  password: String,
  secret: String,
  enabled2fa: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;
