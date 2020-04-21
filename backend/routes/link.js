const express = require('express');
const router = express.Router();
const cors = require('cors')
const db = require("../models");
const User = db.links;
const Op = db.Sequelize.Op;
let users = require('../controllers/link.controller');

router.post('/login', users.login);

router.post('/compte', links.Link);

router.get('/:id', users.getUser)

router.put('/:id', users.update)

module.exports = router;