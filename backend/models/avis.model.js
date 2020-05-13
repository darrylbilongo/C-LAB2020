module.exports = (sequelize, Sequelize) => {
    const Avis = sequelize.define("avis", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      auteurId: {
        type: Sequelize.INTEGER
      },
      contenu: {
        type: Sequelize.STRING
      },
      artisteId: {
        type: Sequelize.INTEGER
      },
    });
  
    return Avis;
};