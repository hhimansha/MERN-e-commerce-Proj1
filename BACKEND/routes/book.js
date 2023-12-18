import express from "express";
const router = express.Router();
import { Book } from "../models/bookModel.js";

router.route("/add").post((req, res) => {
    const { title, author, publishYear } = req.body;

    const newBook = new Book({
        title,
        author,
        publishYear
    });

    newBook.save().then(() => {
        res.json("Book Added");
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ error: err.message });
    });
});

export default router;
