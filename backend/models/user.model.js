module.exports = (sequelize, Sequilize) => {
  const User = sequelize.define('User', {
    id : {
      type: Sequilize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: Sequilize.STRING,
    last_name: Sequilize.STRING,
    email: Sequilize.STRING,
    password: Sequilize.STRING
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};