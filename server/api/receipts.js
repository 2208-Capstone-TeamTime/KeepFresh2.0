const express = require("express");
const router = express.Router();
const ReceiptController = require("../controllers/receiptController");


router.use(express.json())

//get all receipts 
router.get("/", ReceiptController.findAllReceipts)

//get a single receipt by :id
router.get('/:id', ReceiptController.findReceiptbyId);

//create a single receipt 
router.post('/', ReceiptController.createReceipt);

//update a single receipt
router.patch('/:id', ReceiptController.updateReceipt);

//delete a single receipt
router.delete('/:id', ReceiptController.deleteReceipt)

module.exports = router;