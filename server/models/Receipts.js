const mongoose = require('mongoose');
const { Schema } = mongoose

const ReceiptSchema = Schema({
    _id: Schema.Types.ObjectId,
    // usersReceipts: [milk, chesse...],
    // userEmail: adsfa@gmail.com

    products: [],
    userId: {type: Schema.Types.ObjectId, ref:'Users'}
});

module.exports = mongoose.model('Receipts', ReceiptSchema);