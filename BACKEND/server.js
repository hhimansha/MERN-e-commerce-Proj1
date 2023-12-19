const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();


const app = express();

// Use process.env.PORT or default to 9092 if not specified
const port = process.env.PORT || 9092;

app.use(express.json());
app.use("/api/books", require("./routes/bookRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
