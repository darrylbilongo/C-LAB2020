const express = require('express');
const router = express.Router();
const messages = require("../controllers/message.controller.js");

/**
 * @swagger
 * /messages:
 *  post:
 *    tags:
 *       - Messages
 *    name: Message from one user to another
 *    summary: Message from one user to another
 *    produces:
 *      - application/json
 *    consumes : 
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          $ref: '#/definitions/Message'
 *          type: object
 *          properties:
 *            authorId: 
 *              type: integer
 *            message:
 *              type: string
 *            destinationId:
 *              type: integer
 *            required:
 *              - message
 *              - authorId
 *              - destinationId
 *    responses:
 *     '200': 
 *         description: Message created and published successfully
 * /messages/get/{id}:
 *   post:
 *     tags: 
 *       - Messages
 *     name: 
 *       - X
 *     summary: Message from one user to another
 *     produces:
 *      - application/json
 *     consumes : 
 *      - application/json
 *     parameters:
 *      - name: id
 *        in: path
 *        schema:
 *          type: integer
 *        required: true
 *      - name: body
 *        in: body
 *        schema:
 *         $ref: '#/definitions/Message'
 *         type: object
 *         properties:
 *          authordId:
 *            type: integer
 *        required: true
 *     responses:
 *     '200': 
 *         description: Liste des messages envoyé à l'utilisateur {id}
 * 
 */
router.post('/', messages.create );

router.post('/get/:id', messages.findAll);

module.exports = router;