const express = require('express');
const router = express.Router();
const cors = require('cors')
const db = require("../models");
const Link = db.links;
const Op = db.Sequelize.Op;
let links = require('../controllers/link.controller');


router.post('/compte', links.registerLink);
router.get('/profil', links.findAll);


module.exports = router;