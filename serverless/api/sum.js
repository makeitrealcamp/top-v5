const utils = require('../_utils/utils');

module.exports = (req, res) => {
  const { num1, num2 } = req.body;

  const result = utils(num1, num2);
  res.json({ sum: result });
}
