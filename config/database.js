const mongoose = require("mongoose");
require('dotenv').config();
const  MONGO_URI  = process.env.MONGO_URI;

exports.connect = () => {
  // Connecting to the database
  mongoose.set('strictQuery',true);
  mongoose
    .connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true, 
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
    });
};