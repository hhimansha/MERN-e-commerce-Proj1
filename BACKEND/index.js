import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 9091;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.mongoDBURL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!!");
});

import booksRouter from "./routes/book.js";

app.use("/books", booksRouter);

app.listen(PORT, () => {
    console.log(`Server running on port number: ${PORT}`);
});
