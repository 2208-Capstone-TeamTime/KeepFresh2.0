const express = require("express");
const router = express.Router();
const { Receipts } = require("../models/Receipts");


router.use(express.json())

let db

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
  router.post('/', async(req, res, next) => {
    try{
      const addReceipt = await Receipts.create(req.body)
      res.send(addReceipt)
    }
    catch (error){
      console.log("Error in POST /api/receipts :\n\n", error);
      next(error)
    }
  })
  // router.post('/', async(req, res, next) => {
  //   const receipt = req.body

  //   db.collection("receipts")
  //     .insertOne(receipt)
  //     .then(result => {
  //       res.status(201).json(result)
  //     })
  // })


  module.exports = router;
