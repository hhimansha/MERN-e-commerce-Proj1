const express = require("express");
const router = express.Router();
const {
    signUpUser,
    getUsers,
    getUser,
    loginUser,
    currentUser,
    deleteUser
    } = require("../controllers/userController")


router.post("/signup", signUpUser);

// setup route for get a specific book
router.route("/admindash/users/").get(getUsers);

// setup route for get a specific book
router.route("/admindash/users/:id").get(getUser);

router.post("/login", loginUser);

router.get("/current",currentUser );

//setup route for delete a user
router.route("/admindash/users/:id").delete(deleteUser)

module.exports = router;

