const express = require('express');
const router = express.Router();
const cors = require('cors')
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
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

router.get('/:id', users.getUser)

router.put('/:id', users.update)

module.exports = router;