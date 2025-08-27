const express = require('express');
const router = express.Router();

<<<<<<< HEAD

const Controllers = require('../controllers');


=======
// Import all controllers via index.js
const Controllers = require('../controllers');

// GET /api/matches
>>>>>>> 98e0fea (5.2C commit and Push)
router.get('/', Controllers.matchController.getAllMatches);

module.exports = router;
