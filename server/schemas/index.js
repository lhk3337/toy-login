const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
    {
      dbName: process.env.DB_DATA,
    },
    (error) => {
      if (error) {
        console.log("mongoDB error", error);
      } else {
        console.log("mongoDB Success");
      }
    }
  );
};
mongoose.connection.on("error", (error) => {
  console.error("mongoDB error", error);
});
mongoose.connection.on("disconnected", () => {
  console.error("mongoDB disconnection reply connect");
  connect();
});

module.exports = connect;
