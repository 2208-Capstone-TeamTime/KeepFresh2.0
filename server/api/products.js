const express = require("express");
const router = express.Router();
const {findAllProducts, calcExpiration} = require('../controllers/productsController');


//get all products
router.get("/all", findAllProducts);

// //get one product
// router.get("/:id", findProduct_);

//return expiration
router.get("/:name/exp", calcExpiration);

module.exports = router;
