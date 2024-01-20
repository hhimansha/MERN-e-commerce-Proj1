const express = require("express");
const router = express.Router();
const {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
    } = require("../controllers/bookController")

//setup route for get all books
router.route("/").get(getBooks)

// setup route for get a specific book
router.route("/admindash/products/:id").get(getBook);


//setup route for create a book
router.route("/admindash/products").post(createBook)

//setup route for update a book
router.route("/admindash/products/:id").put(updateBook)

//setup route for delete a book
router.route("/admindash/products/:id").delete(deleteBook)

//export the router
module.exports = router;
