const express = require('express');
const router = express.Router();
let User = require('../models/User');

router.route('/').get(async (req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

module.exports = router;