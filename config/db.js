const mongoose = require("mongoose");

mongoose
  .connect(
    //** cmt set up ur db */
    "mongodb+srv://dbMern:mern@cluster0.ggsei.mongodb.net/mern",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
