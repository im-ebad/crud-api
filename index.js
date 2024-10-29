const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { connectToMongoDB } = require("./connect.js");

const app = express();
const PORT = process.env.PORT || 8000;

const route = require("./routes/route");

connectToMongoDB(process.env.DATABASE_URL); //connecting to database.

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", route); //forward to routers for get particular Request

//Server is listening
app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server is running on  the PORT ${PORT}`);
});
