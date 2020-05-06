module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      authorId: {
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING
      },
      destinationId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE,
      }
    });
  
    return Message;
};