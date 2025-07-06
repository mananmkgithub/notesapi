const mongoose = require('mongoose');
const Notes = require('../models/notes')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User name is required"]
  },
  password: {
    type: String,
    required: [true, "Password description is required"]
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"]
  },
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notes"
  }]
});


module.exports = mongoose.model('User', UserSchema);
