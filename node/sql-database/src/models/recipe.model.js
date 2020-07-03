module.exports = (sequelize, DataTypes) => {
  const recipeSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    description: {
      type: DataTypes.STRING,
    }
  };

  const recipeOps = {
    tableName: 'recipes',
    timestamps: true,
  };

  const Recipe = sequelize.define('Recipe', recipeSchema, recipeOps);

  Recipe.associate = (db) => {
    db.Recipe.belongsTo(db.User);
    // db.Recipe.belongsToMany(db.Book, { through: 'RecipeBook' });
  }

  return Recipe;
}
