const express = require("express");
const router = express.Router();
const ProductsController = require('../controllers/productsController');


//get all products
router.get("/all", ProductsController.findAllProducts);

//return expiration
router.get("/:name/exp", ProductsController.calcExpiration);

module.exports = router;
