const express = require('express');
const { asyncErrors } = require('../handlers/errorHandlers');
const attendeeController = require('../controllers/attendeeController');

const router = express.Router();

router.post('/register', attendeeController.register);

module.exports = router;
