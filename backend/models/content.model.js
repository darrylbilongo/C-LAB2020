module.exports = (sequelize, Sequelize) => {
    const Content = sequelize.define("content", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true
      },
      link: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Content;
};