const mongoose = require('mongoose');
const { Schema } = mongoose

const ReceiptSchema = Schema({
    _id: Schema.Types.ObjectId,
    products: [],
    userId: {type: Schema.Types.ObjectId, ref:'Users'}
});

module.exports = mongoose.model('Receipts', ReceiptSchema);