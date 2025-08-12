const express = require('express');
const router = express.Router();

// Import all controllers via index.js
const Controllers = require('../controllers');

// GET /api/matches
router.get('/', Controllers.matchController.getAllMatches);

module.exports = router;
