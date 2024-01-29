const asyncHandler = require("express-async-handler");
const Cart = require("../models/cartModel");
const { error } = require("console");

const addToCart = asyncHandler(async (req, res) => {
    try {
        let totPrice = 0
        
        const { bookId, bookName, qty, imageSrc, price } = req.body;
        console.log('Received data:', req.body);
  
      // Calculate total price
      totPrice = qty * price;
      console.log(typeof(totPrice))
  
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
  
  module.exports = { addToCart };
  