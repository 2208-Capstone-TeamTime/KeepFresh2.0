const express = require("express");
const router = express.Router();
const ReceiptController = require("../controllers/receiptController");


router.use(express.json())

//get all receipts 
router.get("/", ReceiptController.findAllReceipts)

//get all receipts for a user by userId
router.get('/:userId', ReceiptController.findReceiptbyUserId);

//store a receipt by userId
router.post('/:userId', ReceiptController.createReceipt);

//update a single receipt
router.patch('/:id', ReceiptController.updateReceipt);

//delete a single receipt
router.delete('/:id', ReceiptController.deleteReceipt)

module.exports = router;