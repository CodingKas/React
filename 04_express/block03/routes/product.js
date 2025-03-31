const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/add", productController.addProduct);
router.get("/", productController.getAllProducts);
router.get("/:product", productController.getProductByName);
router.get("/category/:category", productController.getProductsByCategory);
router.post("/update", productController.updateProduct);
router.post("/delete", productController.deleteProduct);

module.exports = router;
