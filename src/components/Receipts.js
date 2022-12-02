const mongoose = require('mongoose');
const { Schema } = mongoose

const ReceiptSchema = Schema({
    _id: Schema.Types.ObjectId,
    transaction: {
        type: Number
    },
    productsId: [{type: Schema.Types.ObjectId, ref:'Products'}]
    ,
});

module.exports = mongoose.model('Receipts', ReceiptSchema);
