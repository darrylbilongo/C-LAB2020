const express = require('express');
const router = express.Router();
const cors = require('cors')
const db = require("../models");
const User = db.users;
let users = require('../controllers/user.controller');

// routes pour les users

/**
 * @swagger
 * /users/login:
 *  post:
 *    tags:
 *       - Users
 *    name: Login
 *    summary: Logs in a user
 *    produces:
 *      - application/json
 *    consumes : 
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          $ref: '#/definitions/User'
 *          type: object
 *          properties:
 *            email: 
 *              type: string
 *            password:
 *              type: string
 *              format: password
 *            required:
 *              - email
 *              - password
 *    responses:
 *     '200': 
 *         description: User found and logged successfully
 * /users/register:
 *  post:
 *    tags:
 *       - Users
 *    name: Register
 *    summary: Registers a new user
 *    produces:
 *      - application/json
 *    consumes : 
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          $ref: '#/definitions/User'
 *          type: object
 *          properties:
 *            first_name:
 *              type: string
 *            last_name:
 *              type: string
 *            email: 
 *              type: string
 *            password:
 *              type: string
 *              format: password
 *            role:
 *              type: string
 *            description:
 *              type: string
 *            note:
 *              type: integer
 *            required:
 *              - first_name
 *              - last_name
 *              - email
 *              - password
 *              - role
 *              - description
 *              - note
 *    responses:
 *     '200': 
 *         description: User registered successfully
 * 
 * /users/{id}:
 *  get:
 *    tags:
 *       - Users
 *    name: GetUser
 *    summary: Returns a user with a specific id
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
 * put:
 *    tags:
 *       - Users
 *    name: UpdaterUser
 *    summary: update a user's information
 *    produces:
 *      - application/json
 *    consumes : 
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        schema:
 *          $ref: '#/definitions/User'
 *          type: integer
 *          required: true
 *          description: Numeric ID of the user to get
 *    responses:
 *     '200': 
 *         description: User updated successfully
 * 
 * 
 * /users/avis/{id}:
 *  get:
 *    tags:
 *       - Users
 *    name: GetAvis
 *    summary: Returns reviews with a specific id
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
 * /users/avis:
 *  post:
 *    tags:
 *       - Users
 *    name: RegisterAvis
 *    summary: Registers a new review
 *    produces:
 *      - application/json
 *    consumes : 
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          $ref: '#/definitions/User'
 *          type: object
 *          properties:
 *            authorId:
 *              type: integer
 *            contenu:
 *              type: string
 *            artistId: 
 *              type: string
 *            required:
 *              - authorId
 *              - contenu
 *              - artistId
 *    responses:
 *     '200': 
 *         description: Review registered successfully
 * 
 * 
 */
router.use(cors())

router.route('/').get(async (req, res) => {
  User.findAll()
  .then(users => res.json(users))
  .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

router.post('/login', users.login);

router.post('/register', users.register);

router.get('/:id', users.getUser);

router.put('/:id', users.update);

router.get('/avis/:id', users.getAvis);

router.post('/avis', users.registerAvis);

module.exports = router;