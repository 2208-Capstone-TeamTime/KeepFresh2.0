const mongoose  = require("mongoose");
const Receipts = require("../models/Receipts")

module.exports = {
  findReceiptsbyUserId: async (req, res, next) => {
    try {
      const data = await Receipts.find({ userId: req.params.userId })
      res.send(data);
    } catch (err){
      console.log('ERROR FINDING USER RECEIPTS : ', err);
      next(err);
    }
  },

  createReceipt: (req, res, next) => {
    const receiptId = new mongoose.Types.ObjectId;
    console.log('req Params',req.params.userId)
    const userId = mongoose.Types.ObjectId(req.params.userId);

    try{
      console.log('userId',userId);
      Receipts.create({_id: receiptId, products: req.body, userId:userId})
      .then((data) => res.status(200).send(data));
    } catch (err){
      console.log('ERROR CREATING USER RECEIPT : \N', err);
      next(err);
    }
  },

  updateReceipt: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Receipts.findByIdAndUpdate(id, updates, options);
      res.send(result);
    } catch (error) {
      console.log("Error in Update /api/receipts :\n\n", error);
      next(error)
    }
  },

  deleteReceipt: async (req, res, next) => {
    const id = req.params.id

    try {
      const result = await Receipts.findByIdAndDelete(id)
      res.send(result)
    } catch (error) {
      console.log("Error in DELETE /api/receipts :\n\n", error);
      next(error)
    }
  }
};