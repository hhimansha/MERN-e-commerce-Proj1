const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");
const { error } = require("console");

//@desc Get all books
//@route GET /api/books
//@access public
const getBooks = asyncHandler(async(req,res) => {
    const books = await Book.find();
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

    const book = await Book.create({
        title,
        author,
        publishYear,
    });

    res.status(201).json(book);
});

//@desc Get a book
//@route GET /api/books/:id
//@access public
const getBook = asyncHandler(async(req,res) => {
    const book = await Book.findById(req.params.id);
    if(!book){
        res.status(404);
        throw new Error("Book not found");
    }
    res.status(200).json(book);
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