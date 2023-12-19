const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

// Use process.env.PORT or default to 9092 if not specified
const port = process.env.PORT || 9092;

app.use("/api/books", require("./routes/bookRoutes"))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
