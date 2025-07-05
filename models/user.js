const mongoose = require('mongoose');

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
  usernotes: [{
    user: mongoose.SchemaTypes.ObjectId,
    ref: "notes",
  }]
});

module.exports = mongoose.model('User', UserSchema);
