const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//@desc register a user
//@route POST /api/users/register
//@access public
const signUpUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    res.status(400);
    throw new Error("All the fields are required!");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password ", hashedPassword);

  const user = await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);

  if (user) {
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All the fields are required!");
  }

  // Check if it's the admin login
  if (email === "admin1@admin.com" && password === "Admin@1") {
    // For admin login, you can create a special token or set a flag in the response
    const adminToken = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Adjust the expiration time as needed
    });
    res.status(200).json({ adminToken });
    return;
  }

  // For regular user login
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    res.status(401);
    throw new Error('Incorrect password');
  }

  console.log(`User logged ${user}`);
  res.status(200).json({ _id: user._id, email: user.email });
});





//@desc current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user" });
});

module.exports = { signUpUser, loginUser, currentUser };
