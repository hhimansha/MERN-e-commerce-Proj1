
//@desc Get all books
//@route GET /api/books
//@access public
const getBooks = (req,res) => {
    res.status(200).json({message : "Get all books"});
};

//@desc Create new book
//@route POST /api/books
//@access public
const createBook = (req,res) => {
    console.log("This is the body : ", req.body);
    const {title, author, publishYear} = req.body;
    if(!title || !author || !publishYear){
        res.status(400);
        throw new Error("All the fields are required!");
    }
    res.status(201).json({message : "Create a book"});
}

//@desc Get a book
//@route GET /api/books/:id
//@access public
const getBook = (req,res) => {
    res.status(200).json({message : `Get book for ${req.params.id}`});
}

//@desc Update a book
//@route PUT /api/books/:id
//@access public
const updateBook = (req,res) => {
    res.status(200).json({message : `Update a book ${req.params.id}`});
}

//@desc Delete a book
//@route DELETE /api/books/:id
//@access public
const deleteBook = (req,res) => {
    res.status(200).json({message : `Delete a book ${req.params.id}`});
}

module.exports = {getBook, getBooks, createBook, updateBook, deleteBook};