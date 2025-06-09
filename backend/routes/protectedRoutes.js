const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/authMiddleware');

router.get('/dashboard', requireAuth, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard!',
    user: req.user
  });
});

module.exports = router;
