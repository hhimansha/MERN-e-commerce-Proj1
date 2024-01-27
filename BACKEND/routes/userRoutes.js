const express = require("express");
const router = express.Router();
const {
    signUpUser,
    getUsers,
    getUser,
    loginUser,
    deleteUser,
    createAddress,
    getUserAddresses,
    updateUserAddress,
    deleteUserAddress,
    } = require("../controllers/userController")


router.post("/signup", signUpUser);

// Setup route for creating or updating delivery address (protected route)
router.route("/user/address/all").get(getUserAddresses);

router.route("/user/address").post(createAddress);

// setup route for get a specific book
router.route("/admindash/users/").get(getUsers);

// setup route for get a specific book
router.route("/admindash/users/:id").get(getUser);

router.post("/login", loginUser);

//setup route for delete a user
router.route("/admindash/users/:id").delete(deleteUser)

module.exports = router;

