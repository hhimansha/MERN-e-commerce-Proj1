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

// Load environment variables
if (dotenv.error) {
  console.error("Error loading .env file:", dotenv.error);
}

app.use(cors());
app.use(express.json());

app.use("/api/proteins", require("./routes/proteinRoutes"));
app.use("/api/users", require("./routes/userRoutes")); 
app.use("/api/order", require("./routes/orderRoutes")); 
app.use("/api/dashboard", require("./routes/dashboardRoutes"))



app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});