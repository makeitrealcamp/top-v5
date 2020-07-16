const User = require('../models/user.model');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

module.exports = {
  async create(req, res) {
    const user = await User.create(req.body);
    res.status(200).json(user);
  },
  async enable2FA(req, res) {
    const { id } = req.params;

    const { base32, otpauth_url } = speakeasy.generateSecret({ length: 32, name: 'My first 2fa app' });
    console.log(otpauth_url)

    const user = await User.findByIdAndUpdate(id, { enabled2fa: true, secret: base32 });

    const qrcode = await QRCode.toDataURL(otpauth_url);

    res.status(200).send(`<img src="${qrcode}" />`);
  },
  async verify(req, res) {
    const { id } = req.params;
    const { token } = req.body;

    const { secret } = await User.findById(id);

    const isValid = speakeasy.totp.verify({
      secret,
      token,
      encoding: 'base32',
      window: 1
    });

    if(isValid) {
      return res.status(200).json({ message: 'success' });
    }

    return res.status(401).json({ message: 'failure' });
  }
}
