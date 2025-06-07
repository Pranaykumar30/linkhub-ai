const User = require('../models/User');

// Create user
exports.createUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = new User({ email, name });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
