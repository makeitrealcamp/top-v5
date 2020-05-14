const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
  async signup(req, res) {
    try {
      const data = req.body;
      const password = await bcrypt.hash(data.password, 8);
      // No corre el código siguiente sin que se resuelva bcrypt.hash

      const user = await User.create({ email: data.email, password });
      // No corre el código siguiente sin que se resuelva User.create

      const token = jwt.sign(
        { user: user._id },
        'lamismaclavedemicorreo',
        { expiresIn: 60 * 60 * 24 * 365 }
      );

      res.status(200).json(token);
    } catch (error) {
      console.log(error);
    }

    // const data = req.body;
    // bcrypt
    //   .hash(data.password, 8)
    //   .then(password => {
    //     User
    //       .create({ email: data.email, password })
    //       .then(user => {
    //         res.status(200).json(user);
    //       })
    //   })
    //   .catch(error => console.log(error));
  },
  signin(req, res) {},
};
