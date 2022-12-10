const mongoose = require('mongoose');
const { Schema } = mongoose

const ReceiptSchema = Schema({
    _id: Schema.Types.ObjectId,
    // usersReceipts: [milk, chesse...],
    // userEmail: adsfa@gmail.com

    productsId: [{type: Schema.Types.ObjectId, ref:'Products'}],
    userId: [{type: Schema.Types.ObjectId, ref:'User'}]
});

module.exports = mongoose.model('Receipts', ReceiptSchema);