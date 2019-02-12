const express = require('express');
const { asyncErrors } = require('../handlers/errorHandlers');
const attendeeController = require('../controllers/attendeeController');

const router = express.Router();

router.post('/attendees/register', asyncErrors(attendeeController.register));

router.get('/test', (req, res) => {
  res.json({
    test: 'test',
  });
});

module.exports = router;
