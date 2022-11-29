const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('./index')

class User extends Model {}
User.init({
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'User',
})

module.exports = User