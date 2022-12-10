const mongoose  = require("mongoose");
const Receipts = require("../models/Receipts")

module.exports = {
  findAllReceipts: async (req, res) => {
    Receipts.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving receipts."
        });
      });
  },

  findReceiptbyUserId: async (req, res, next) => {
    try {
      const data = await Receipts.find({ _id: req.params.id })
      res.send(data);
    } catch (error) {
      console.log("Error in GET /api/receipts :\n\n", error);
      next(error);
    }
  },

  createReceipt: async (req, res, next) => {
    const id = new mongoose.Types.ObjectId
    try {
      const addReceipt = new Receipts({_id: id, productsId: req.body.products})
      const result = await addReceipt.save()
      res.send(result)
    }
    catch (error) {
      console.log("Error in POST /api/receipts :\n\n", error);
      next(error)
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