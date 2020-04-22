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
 * /users/getUser:
 *  post:
 *    tags:
 *       - Users
 *    name: GetUser
 *    summary: Returns a user with a specific id
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
 *            id: 
 *              type: integer
 *            required:
 *              - id
 *    responses:
 *     '200': 
 *         description: User found and logged successfully
 */
router.use(cors())

router.route('/').get(async (req, res) => {
  User.findAll()
  .then(users => res.json(users))
  .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

router.post('/login', users.login);

router.post('/register', users.register);

router.get('/:id', users.getUser)

router.put('/:id', users.update)

module.exports = router;