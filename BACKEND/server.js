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

// Add your CORS options if needed
// const corsOptions = {
//   origin: "http://yourfrontenddomain.com",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
// };
// app.use(cors(corsOptions));

app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/users", require("./routes/userRoutes")); 
app.use("/api/order", require("./routes/cartRoutes")); 



app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});