const asyncHandler = require("express-async-handler");
const Cart = require("../models/orderModel");
const { error } = require("console");

const placeOrder = asyncHandler(async (req, res) => {
    try {
        let totPrice = 0
        
        const { bookId, bookName, qty, imageSrc, price } = req.body;
        console.log('Received data:', req.body);
  
      // Calculate total price
      totPrice = qty * price;
  
      // Create a new order in the database
      const newCart = await Cart.create({
        bookId,
        bookName,
        qty,
        imageSrc,
        TotPrice: totPrice, // Ensure that TotPrice is assigned the calculated totPrice
      });
  
      res.status(201).json({ success: true, data: newCart });
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

  const getCarts = asyncHandler(async(req,res) => {
    const carts = await Cart.find(); 
    res.status(200).json(carts);
  });

  const getCart = asyncHandler(async(req,res) => {
    const cart = await Cart.findById(req.params.id);
    if(!cart){
        res.status(404);
        throw new Error("Cart not found");
    }
    res.status(200).json(cart);
});
  
  module.exports = { placeOrder,  getCarts, getCart};
  