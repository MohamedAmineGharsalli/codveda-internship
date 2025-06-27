const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post title is required'],
    trim: true,
  },
  body: {
    type: String,
    required: [true, 'Post body is required'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  }
}, { timestamps: true });

postSchema.index({ user: 1 });

module.exports = mongoose.model('Post', postSchema);
