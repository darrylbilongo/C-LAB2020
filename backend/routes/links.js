const express = require('express');
const router = express.Router();
const cors = require('cors')
const db = require("../models");
const Link = db.links;

let links = require('../controllers/link.controller');

/**
 * @swagger
 * /links/registerLink:
 *  post:
 *    tags:
 *       - Links
 *    name: RegisterLink
 *    summary: Registers a new link
 *    produces:
 *      - application/json
 *    consumes : 
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          $ref: '#/definitions/Link'
 *          type: object
 *          properties:
 *            contenu:
 *              type: string
 *            categorie:
 *              type: string
 *            UserId: 
 *              type: string
 *            required:
 *              - contenu
 *              - categorie
 *              - UserId
 *    responses:
 *     '200': 
 *         description: Link registered successfully
 * 
 * /links/youtube/{id}:
 *  get:
 *    tags:
 *       - Links
 *    name: GetLinkY
 *    summary: Returns a youtube link for a user with a specific id
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
 *         description: Link found and returned
 * 
 * /links/insta/{id}:
 *  get:
 *    tags:
 *       - Links
 *    name: GetLinkY
 *    summary: Returns an instagram link for a user with a specific id
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
 *         description: Link found and returned
 * 
 * /links/twitter/{id}:
 *  get:
 *    tags:
 *       - Links
 *    name: GetLinkY
 *    summary: Returns a link with a specific id
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
 *         description: User found and returned
 * 
 * 
 */
router.post('/compte', links.registerLink);
router.get('/youtube/:id', links.getLinkY);
router.get('/insta/:id', links.getLinkI);
router.get('/twitter/:id', links.getLinkT);


module.exports = router;