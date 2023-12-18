import {PORT, mongoDBURL} from "./config.js";
import express from "express";
import mongoose from "mongoose";
//import nodemon from "nodemon";

const app = express();

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Welcome to mern stack');
});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});

mongoose.connect(mongoDBURL).then(() => {
    console.log("Connected to the database");
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});
