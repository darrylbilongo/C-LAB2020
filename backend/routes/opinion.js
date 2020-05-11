const express = require('express');
const router = express.Router();
const opinions = require("../controllers/opinion.controller.js");

router.post('/', opinions.create );

router.post('/get/:id', opinions.findAll);

module.exports = router;