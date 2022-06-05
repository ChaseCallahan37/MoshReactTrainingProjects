const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

//us: chasetcallahan p: Bobear37
const MONGODB_URI =
  "mongodb+srv://<username>:Bobear37@firstcluster.4f6bjgq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || "mongodb://localhost/test_server", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("mongoose is connected!");
});

app.use(morgan("tiny"));

app.get("/api", (req, res) => {
  const data = {
    username: "chasetcallahan",
    age: 21,
  };
  res.json(data);
});

app.get("/api/name", (req, res) => {
  const data = {
    username: "chase thomas callahan is my name",
    age: 21,
  };
  res.json(data);
});

app.listen(PORT, console.log(`server is starting at ${PORT}`));
