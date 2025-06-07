const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String, // link to profile picture
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    socialLinks: {
      type: [String], // We'll update this to a more complex structure later
      default: [],
    },
    links: [
      {
        title: String,
        url: String,
        order: Number,
      },
    ],
    isPro: {
      type: Boolean,
      default: false,
    },
    stripeCustomerId: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
