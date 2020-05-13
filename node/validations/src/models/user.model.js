const { Schema, model, models } = require('mongoose');

const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const uniqueEmail = {
  validator(value) {
    // return value.length >= 0;
    // return typeof(value) === 'string';
    return models.User.findOne({ email: value })
      .then(user => !user)
      .catch(() => false);
  },
  message: 'El email ya existe'
}

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre de usuario es requerido'],
    // minlength: [10, 'Que nombre tan cortico'],
    // maxlength: [255, `El mensaje para el loco que tenga un nombre más largo que 255`],
    enum: {
      values: ['simon', 'maria', 'ana', 'juan'],
      message: 'No es una opción valida'
    }
  },
  age: {
    type: Number,
    required: [true, 'Si no pones la edad pues no creo el usuario'],
    min: 18,
    max: 27
  },
  email: {
    type: String,
    required: true,
    match: [emailTest, 'Correo invalido'],
    validate: [
      uniqueEmail
    ]
  },
  images: {
    type: [String],
    validate: {
      validator(value) {
        return value.length >= 1;
      }
    }
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;
