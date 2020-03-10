const express = require('express');
const router = express.Router();
//let Post = require('../models/post.model');
const posts = require("../controllers/post.controller.js");

router.post('/', posts.create );

router.get('/', posts.findAll);

// Delete a Tutorial with id
router.delete("/:id", posts.delete);

// Create a new Tutorial
router.delete("/", posts.deleteAll);

module.exports = router;
