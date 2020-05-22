/**
 * @swagger
 * definitions:
 *  Avis:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      authorId:
 *        type: integer
 *      contenu:
 *        type: string
 *      artisteId:
 *        type: integer
 * 
 */
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