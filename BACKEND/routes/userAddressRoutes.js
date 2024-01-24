const express = require("express");
const router = express.Router();
const {
    createUserAddress, 
    getAllUserAddresses, 
    getUserAddress,
    deleteUserAddress
    } = require("../controllers/userAddressController")


router.post("/user/address", createUserAddress);

// setup route for get a specific book
router.route("/user/address/all").get(getAllUserAddresses);

router.route("/user/address/:id")
  .get(getUserAddress)
  .delete(deleteUserAddress);


module.exports = router;

