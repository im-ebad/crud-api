const mongoose = require("mongoose");
connectToMongoDB = async (url) => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB connnected");
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = { connectToMongoDB };
