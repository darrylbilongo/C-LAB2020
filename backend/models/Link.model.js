
/**
 * @swagger
 * definitions:
 *  post:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      lienYoutube:
 *        type: string
 *      lienInsta:
 *        type: string
 *      lienAutre:
 *        type: string
 * 
 */
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