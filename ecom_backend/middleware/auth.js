const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Skip auth for development - remove this in production
  if (process.env.NODE_ENV !== 'production') {
    req.user = { id: 1, username: 'admin' };
    return next();
  }
  
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

module.exports = auth;