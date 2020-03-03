const express = require('express');
const router = express.Router();
let Post = require('../models/Post');

router.route('/').get(async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
  })

module.exports = router;
