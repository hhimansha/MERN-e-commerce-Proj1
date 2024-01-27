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
    updateUser,
    deleteUserAddress,
    } = require("../controllers/userController")


router.post("/signup", signUpUser);

// Setup route for creating or updating delivery address (protected route)
router.route("/user/address/:id").get(getUserAddresses);

// Setup route for creating or updating delivery address (protected route)
router.route("/user/address/:id").post(createAddress);

// Setup route for updating user details (protected route)
router.route("/user/:id").put(updateUser);


// setup route for get a specific book
router.route("/admindash/users/").get(getUsers);

// setup route for get a specific book
router.route("/admindash/users/:id").get(getUser);

router.post("/login", loginUser);

//setup route for delete a user
router.route("/admindash/users/:id").delete(deleteUser)

module.exports = router;

