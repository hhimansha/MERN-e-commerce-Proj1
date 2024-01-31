const express = require('express');
const router = express.Router();
const { placeOrder, getOrders, getOrder, deleteOrder } = require('../controllers/orderController');

router.route('/place').post(placeOrder);
router.route('/admindash/orders').get(getOrders);
router.route('/admindash/orders/:id').delete(deleteOrder); 
router.route('/orders/user/:id').get(getOrder); // Corrected route

module.exports = router;
