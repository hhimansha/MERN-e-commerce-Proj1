const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");

//@desc Get all books
//@route GET /api/books
//@access public
const getBooks = asyncHandler(async(req,res) => {
    const books = Book.find();
    res.status(200).json(books);
});

//@desc Create new book
//@route POST /api/books
//@access public
const createBook = asyncHandler(async(req,res) => {
    console.log("This is the body : ", req.body);
    const {title, author, publishYear} = req.body;
    if(!title || !author || !publishYear){
        res.status(400);
        throw new Error("All the fields are required!");
    }
    res.status(201).json({message : "Create a book"});
});

//@desc Get a book
//@route GET /api/books/:id
//@access public
const getBook = asyncHandler(async(req,res) => {
    res.status(200).json({message : `Get book for ${req.params.id}`});
});

//@desc Update a book
//@route PUT /api/books/:id
//@access public
const updateBook = asyncHandler(async(req,res) => {
    res.status(200).json({message : `Update a book ${req.params.id}`});
});

//@desc Delete a book
//@route DELETE /api/books/:id
//@access public
const deleteBook = asyncHandler(async(req,res) => {
    res.status(200).json({message : `Delete a book ${req.params.id}`});
});

module.exports = {getBook, getBooks, createBook, updateBook, deleteBook};