// models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['alumni', 'admin'], // Adjust the roles as needed
    default: 'alumni',
  },
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

export default User;
