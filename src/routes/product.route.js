const express = require("express");
const productRoute = express.Router();
const Product = require("../models/product.model.js");
const productController = require("../controllers/product.controller.js");

productRoute.get("/", productController.getProducts);
productRoute.get("/:id", productController.getProduct);
productRoute.post("/", productController.createProduct);
productRoute.put("/:id", productController.updateProduct);
productRoute.delete("/:id", productController.deleteProduct);

module.exports = productRoute;
