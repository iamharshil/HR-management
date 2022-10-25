const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_KEY, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
  })
  .then(() => console.log("Database connected.!!"))
  .catch((err) => console.log(err));
