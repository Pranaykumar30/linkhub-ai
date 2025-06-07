require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.USE_CLOUD === 'true'
  ? process.env.MONGODB_URI_CLOUD
  : process.env.MONGODB_URI_LOCAL;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Health route
app.get('/', (req, res) => {
  res.send('🚀 Backend running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

// Add this line below express setup
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
