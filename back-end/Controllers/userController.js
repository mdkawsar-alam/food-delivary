import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";


// Helper function to create a token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// login user
const loginUser = async (req, res) => {
  const {email,password}= req.body;
  try {
    const user= await userModel.findOne({email});
    if(!user){
      return res.status(400).json({success:false, message:"user dose`t exists"})
    }
     const isMatch= await bcrypt.compare(password, user.password);
     if (!isMatch) {
      return res.status(400).json({success:false , message:"Invalid credentials"})
      
     }
     const token=createToken(user._id);
      res.status(201).json({success:true ,token})
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
    
  }

};
// Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Validate email format and password length
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email address" });
    }
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Please enter a strong password (at least 8 characters)" });
    }

    // Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    const User = await newUser.save();

    // Create a token
    const token = createToken(User._id); // Pass the correct user ID to createToken

    // Respond with success and the token
    res.status(201).json({ success: true, token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser };