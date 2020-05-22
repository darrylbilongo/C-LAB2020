/**
 * @swagger
 * definitions:
 *  Link:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      contenu:
 *        type: string
 *      categorie:
 *        type: string
 *      UserId:
 *        type: integer
 * 
 */
module.exports = (sequelize, Sequelize) => {
    const Link = sequelize.define("Link", {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        contenu: Sequelize.STRING,
        categorie: Sequelize.STRING,
        },
        {timestamps: false})
    return Link;
  };