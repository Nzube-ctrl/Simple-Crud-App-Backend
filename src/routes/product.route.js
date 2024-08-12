const express = require("express");
const productRoute = express.Router();
const productController = require("../controllers/product.controller.js");
const {
  updatedProductMiddleWare,
  productValidatorMiddleWare,
} = require("../validators/product.validator.js");

productRoute.get("/", productController.getProducts);
productRoute.get("/:id", productController.getProduct);
productRoute.post(
  "/",
  productValidatorMiddleWare,
  productController.createProduct
);
productRoute.put(
  "/:id",
  updatedProductMiddleWare,
  productController.updateProduct
);
productRoute.delete("/:id", productController.deleteProduct);

module.exports = productRoute;
