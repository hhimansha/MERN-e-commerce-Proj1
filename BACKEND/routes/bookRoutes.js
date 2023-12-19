const express = require("express");
const router = express.Router();

//setup route for get all books
router.route("/").get((req,res) => {
    res.status(200).json({message : "Get all books"});
})

//setup route for get a specific book
router.route("/:id").get((req,res) => {
    res.status(200).json({message : `Get book for ${req.params.id}`});
})

//setup route for create a book
router.route("/").post((req,res) => {
    res.status(200).json({message : "post a book"});
})

//setup route for update a book
router.route("/:id").put((req,res) => {
    res.status(200).json({message : `Update a book ${req.params.id}`});
})

//setup route for delete a book
router.route("/:id").delete((req,res) => {
    res.status(200).json({message : `Delete a book ${req.params.id}`});
})

//export the router
module.exports = router;
