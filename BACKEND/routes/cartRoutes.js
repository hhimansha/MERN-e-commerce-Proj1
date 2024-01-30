const express = require("express");
const router = express.Router();
const {
    addToCart, getCarts
    } = require("../controllers/cartController")

router.route('/cart').post(addToCart);

router.route('/carts').get(getCarts)

module.exports = router;