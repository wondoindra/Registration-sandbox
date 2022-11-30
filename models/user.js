const { Model, DataTypes } = require('sequelize')
const sendmail = require('../mailer.js')

const { sequelize } = require('./index')

class User extends Model {}
User.init({
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  hooks: {
    afterCreate: (user) => sendmail(user),
  },
  sequelize,
  modelName: 'User',
})

module.exports = User