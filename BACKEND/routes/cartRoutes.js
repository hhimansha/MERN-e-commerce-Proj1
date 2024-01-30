const express = require("express");
const router = express.Router();
const {
    addToCart, getCarts, getCart
    } = require("../controllers/cartController")

router.route('/cart').post(addToCart);

router.route('/carts').get(getCarts)

router.route('/carts/:id').get(getCart)

module.exports = router;