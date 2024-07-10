// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');
const User = require('../models/userModel');

router.get('/total-orders', async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments({});
    res.json({ totalOrders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/total-users', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({});
    res.json({ totalUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/total-sales', async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$TotPrice" },
        },
      },
    ]);
    const totalSales = result.length > 0 ? result[0].totalSales : 0;
    res.json({ totalSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
