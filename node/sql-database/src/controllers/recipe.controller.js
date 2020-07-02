const { Recipe, User } = require('../db');

module.exports = {
  async list(req, res) {
    const recipes = await Recipe.scope({ include: [User] }).findAll();
    res.status(200).json(recipes);
  },
  async create(req, res) {
    const { userId } = req.params;
    const recipe = await Recipe.create(req.body);

    recipe.setUser(userId);
    await recipe.save();

    console.dir(recipe);
    res.status(200).json(recipe);
  }
}
