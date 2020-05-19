const express = require('express');
const router = express.Router();
const cors = require('cors')
const db = require("../models");
const Link = db.links;

let links = require('../controllers/link.controller');

router.post('/compte', links.registerLink);
router.get('/profil', links.findAll);
router.get('/:id', links.getLink);
router.put('/:id', links.update);

module.exports = router;