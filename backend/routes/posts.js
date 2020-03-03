const express = require('express');
const router = express.Router();
let Post = require('../models/Post');

router.route('/').get(async (req, res) => {
  Post.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

module.exports = router;
