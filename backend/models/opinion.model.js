module.exports = (sequelize, Sequelize) => {
    const Opinion = sequelize.define("opinion", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      authorId: {
        type: Sequelize.INTEGER
      },
      opinion: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE,
      }
    });
  
    return Opinion;
};