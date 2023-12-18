import {PORT} from "./config.js";
import express from "express";

const app = express();

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});