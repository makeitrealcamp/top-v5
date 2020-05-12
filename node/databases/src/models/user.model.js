const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  age: {
    type: Number,
    required: true
  },
  working: Boolean
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports User;
