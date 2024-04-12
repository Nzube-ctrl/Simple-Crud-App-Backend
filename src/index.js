const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello From The Node Api");
});

app.all("*", (req, res) => {
  res.json({ message: "Page Not found" });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to the Database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });
