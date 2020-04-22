const express = require('express');
const router = express.Router();
//let Post = require('../models/post.model');
const contents = require("../controllers/content.controller.js");

router.post('/', contents.create );

router.get('/', contents.findAll);

module.exports = router;