const express = require("express");
const app = express();
const cors =require("cors");
const connectDB=require("./config/mongoose-connection");
const mainRouter = require("./routes/index")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require('dotenv').config();
connectDB();

app.use("/api/v1", mainRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });