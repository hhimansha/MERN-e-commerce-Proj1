const express = require("express");
const router = express.Router();
const {
    signUpUser,
    getUsers,
    loginUser,
    currentUser
    } = require("../controllers/userController")


router.post("/signup", signUpUser);

// setup route for get a specific book
router.route("/admindash/users/").get(getUsers);

router.post("/login", loginUser);

router.get("/current",currentUser );

module.exports = router;

