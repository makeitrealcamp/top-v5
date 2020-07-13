module.exports = (req, res) => {
  console.log(req.body);
  res.json({ message: 'Hola mundo' })
}
