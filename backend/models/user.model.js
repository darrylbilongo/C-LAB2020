module.exports = (sequelize, Sequilize) => {
  const User = sequelize.define('User', {
    name: Sequilize.STRING,
    surname: Sequilize.STRING,
    email: Sequilize.STRING,
    password: Sequilize.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};