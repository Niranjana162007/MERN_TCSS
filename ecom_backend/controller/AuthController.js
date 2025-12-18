const User = require('../model/User');
const jwt = require('jsonwebtoken');

// Register user
const register = async (req, res) => {
    try {
        console.log('Registration request received:', req.body);
        const { email, password, confirmPassword } = req.body;

        // Validation
        if (!email || !password || !confirmPassword) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters' });
        }

        console.log('Checking if user exists...');
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email' });
        }

        console.log('Creating new user...');
        // Create user
        const user = new User({ email, password });
        await user.save();
        console.log('User created successfully');

        res.status(201).json({ 
            message: 'Registration successful! Please login to continue.' 
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: `Registration failed: ${error.message}` });
    }
};

// Login user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found. Please register first.' });
        }

        // Check password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials. Login failed.' });
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: { 
                id: user._id, 
                email: user.email,
                name: user.email.split('@')[0] // Use email prefix as name
            }
        });

    } catch (error) {
        res.status(500).json({ error: 'Login failed. Please try again.' });
    }
};

module.exports = { register, login };