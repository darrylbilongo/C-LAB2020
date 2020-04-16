/**
 * @swagger
 * definitions:
 *  User:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      first_name:
 *        type: string
 *      last_name:
 *        type: string
 *      email:
 *        type: string
 *      password:
 *        type: string
 * 
 */

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    role: Sequelize.STRING,
    description: Sequelize.TEXT
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};