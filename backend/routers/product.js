const { Router } = require("express");
const { getAllProduct, getProductById } = require("../controller/products");
const router = Router();

//@desc Get all products from db
//@route get /api/products
//@access Public
router.get("/", getAllProduct);

//@desc Get all product by id from  db
//@route get /api/products/:id
//@access Public
router.get("/:id", getProductById);

module.exports = router;
