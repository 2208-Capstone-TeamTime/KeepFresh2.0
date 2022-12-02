const express = require("express");
const router = express.Router();
const { Receipts } = require("../models/Receipts");


//get all receipts 
router.get("/", async (req, res, next) => {
    try {
      res.send(await Receipts.find({}));//mongoose find all doc syntax

    } catch (error) {
      console.log("Error in GET /api/receipts :\n\n", error);
      next(error);
    }
  });
 
  //get a single receipt by :id
  router.get('/:id', async (req,res,next) => {
    try {
        const data = await Receipts.find({ _id: req.params.id})
        res.send(data);
    } catch (error) {
        console.log("Error in GET /api/receipts :\n\n", error);
        next(error);
    }
});

  //store a single receipt 

  module.exports = router;
