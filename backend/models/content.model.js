/**
 * @swagger
 * definitions:
 *  content:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      link:
 *        type: string
 *      published:
 *        type: boolean
 * 
 */

module.exports = (sequelize, Sequelize) => {
    const Content = sequelize.define("content", {
      id: {
        type: Sequelize.INTEGER,
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