const express = require('express');
const router = express.Router();
let Content = require('../models/content.model');
const contents = require("../controllers/content.controller.js");

router.route('/').get(async (req, res) => {
  Content.findAll()
  .then(users => res.json(users))
  .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

router.post('/', contents.create );

router.get('/:id', contents.findAll);

module.exports = router;