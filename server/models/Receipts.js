const mongoose = require('mongoose');
const { Schema } = mongoose

const ReceiptSchema = Schema({
    _id: Schema.Types.ObjectId,
    productsId: [{type: Schema.Types.ObjectId, ref:'Products'}],
    userId: [{type: Schema.Types.ObjectId, ref:'User'}]
});

module.exports = mongoose.model('Receipts', ReceiptSchema);