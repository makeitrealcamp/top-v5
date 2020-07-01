module.exports = (sequelize, DataTypes) => {
  const userSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    email: {
      type: DataTypes.STRING,
      noEmpty: true,
    }
  };

  const userOps = {
    tableName: 'users',
    timestamps: true,
  };

  const User = sequelize.define('User', userSchema, userOps);

  return User;
}
