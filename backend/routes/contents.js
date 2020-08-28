const express = require('express');
const router = express.Router();
let Content = require('../models/content.model');
const contents = require("../controllers/content.controller.js");

/**
 * @swagger
 * /contents/:
 *  post:
 *    tags:
 *       - Content
 *    name: createContent
 *    summary: Create a new content
 *    produces:
 *      - application/json
 *    consumes : 
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          $ref: '#/definitions/Content'
 *          type: object
 *          properties:
 *            link:
 *              type: string
 *            required:
 *              - link
 *    responses:
 *     '200': 
 *         description: Content registered successfully
 * 
 * /contents/{id}:
 *  get:
 *    tags:
 *       - Content
 *    name: FindAll
 *    summary: Returns content with a specific id
 *    produces:
 *      - application/json
 *    consumes : 
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        schema:
 *          type: integer
 *          required: true
 *          description: Numeric ID of the user to get
 *    responses:
 *     '200': 
 *         description: Content found and returned 
 */

router.post('/', contents.create );

router.get('/:id', contents.findAll);

module.exports = router;