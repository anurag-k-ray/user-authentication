import mongoose from "mongoose";

//Intilializing user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  //We can use role to specifiy but we can proceed with isVerified and isAdmin
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgetPasswordToken: String,
  forgetPasswordTokenExpiry: String,
  verifyToken: String,
  verifyTokenExpiry: String,
});

// Check if the model is already defined before defining it
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
