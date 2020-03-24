const express = require('express');
const router = express.Router();
const cors = require('cors')
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
let users = require('../controllers/user.controller');

router.use(cors())

router.route('/').get(async (req, res) => {
  User.findAll()
  .then(users => res.json(users))
  .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

router.post('/login', users.login);

router.post('/register', users.register);

module.exports = router;