

module.exports = (sequelize, Sequelize) => {
    const Link = sequelize.define("Link", {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        lienYoutube: Sequelize.STRING,
        lienInsta: Sequelize.STRING,
        lienAutre: Sequelize.STRING,
        },
        {timestamps: false})
    return Link;
  };