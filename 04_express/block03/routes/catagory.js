const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");

router.post("/add", categoryController.addCategory);
router.post("/delete", categoryController.deleteCategory);
router.post("/update", categoryController.updateCategory);
router.get("/categories", categoryController.getCategories);

module.exports = router;
