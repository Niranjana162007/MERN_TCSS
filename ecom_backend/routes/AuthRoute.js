const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Simple login route for testing
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple hardcoded check (replace with real auth)
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign(
      { id: 1, username: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ 
      token,
      user: { id: 1, username: 'admin', name: 'Admin User' }
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;