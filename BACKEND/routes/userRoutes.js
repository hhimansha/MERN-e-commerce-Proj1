const express = require("express");
const router = express.Router();
const {
    signUpUser,
    loginUser,
    currentUser
    } = require("../controllers/userController")


router.post("/signup", signUpUser);

router.post("/login", loginUser);

router.get("/current",currentUser );

module.exports = router;

