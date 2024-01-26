const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const UserAddress = require("../models/userDeliveryAddress");


const createUserAddress = asyncHandler(async (req, res) => {
    const { userID,userName, address, phone } = req.body;
  
    // Access the user ID from the request object (assuming it's attached by middleware)
    //const userID = req.user._id;
  
    if (!userID || !userName || !address || !phone) {
      res.status(400);
      throw new Error("All the fields are required!");
    }
  
    const userAddress = await UserAddress.create({
      userID,
      userName,
      address,
      phone,
    });
  
    console.log(`User address created ${userAddress}`);
  
    if (userAddress) {
      res.status(201).json({ _id: userAddress._id, userID: userID,userName: userAddress.userName, address: userAddress.address, 
        phone: userAddress.phone });
    } else {
      res.status(400);
      throw new Error("User data is not valid");
    }
  });
  


const getAllUserAddresses = asyncHandler(async(req,res) => {
  // Exclude the password field from the query projection
  const users = await UserAddress.find();
  res.status(200).json(users);
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