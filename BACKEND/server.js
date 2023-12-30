const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConnect");
const cors = require('cors');

connectDB();
const app = express();

// Use process.env.PORT or default to 9092 if not specified
const port = process.env.PORT || 9092;

app.use(express.json());

app.use(errorHandler);
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
