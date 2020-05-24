const express = require('express');
const router = express.Router();
const cors = require('cors')
const db = require("../models");
const Link = db.links;

let links = require('../controllers/link.controller');

router.post('/compte', links.registerLink);
router.get('/youtube/:id', links.getLinkY);
router.get('/insta/:id', links.getLinkI);
router.get('/twitter/:id', links.getLinkT);


module.exports = router;