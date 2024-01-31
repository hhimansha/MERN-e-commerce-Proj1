const express = require("express");
const router = express.Router();
const {
    addToCart, getCarts, getCart
    } = require("../controllers/orderController")



module.exports = router;