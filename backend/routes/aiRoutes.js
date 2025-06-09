// backend/routes/aiRoutes.js

const express = require('express');
const router = express.Router();
const { getAIResponse } = require('../ai/aiController');
const  protect  = require('../middleware/authMiddleware'); // ensure JWT protection

console.log('getAIResponse is:', getAIResponse);
console.log('protect is:', protect);

router.post('/', protect, getAIResponse);

module.exports = router;
