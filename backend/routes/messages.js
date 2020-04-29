const express = require('express');
const router = express.Router();
const messages = require("../controllers/message.controller.js");

router.post('/', messages.create );

router.post('/get/:id', messages.findAll);

module.exports = router;