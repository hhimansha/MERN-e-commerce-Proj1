const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const UserAddress = require("../models/userDeliveryAddress");


const createUserAddress = asyncHandler(async (req, res) => {
    const {userID,userName, address, phone } = req.body;
  
    // Access the user ID from the request object (assuming it's attached by middleware)
    //const userID = req.user._id;
  
    if (!userName || !address || !phone) {
      res.status(400);
      throw new Error("All the fields are required!");
    }

  try {
    //const userID = req.user._id
    const userAddress = await UserAddress.create({
      userID,
      userName,
      address,
      phone,
    });
    res.status(200).json(userAddress)
  
  }catch(error){
    res.status(400).json({ error: error.message })
  }
   
    
  });
  


const getAllUserAddresses = asyncHandler(async(req,res) => {
  // Exclude the password field from the query projection
  const userAddress = await UserAddress.find();
  res.status(200).json(userAddress);
});

const getUserAddress = asyncHandler(async(req,res) => {
  const userAddress = await UserAddress.findById(req.params.id);
  if(!userAddress){
      res.status(404);
      throw new Error("User not found");
  }
  res.status(200).json(userAddress);
});



const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user" });
});


const deleteUserAddress = asyncHandler(async (req, res) => {
  const userAddress = await UserAddress.findById(req.params.id);
  if (!userAddress) { 
      res.status(404);
      throw new Error("User not found");
  }

  await UserAddress.deleteOne(); // Use deleteOne to remove the document
  res.status(200).json(userAddress);
});

module.exports = { createUserAddress, getAllUserAddresses, getUserAddress,deleteUserAddress };