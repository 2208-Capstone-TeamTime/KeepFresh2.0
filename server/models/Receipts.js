const mongoose = require('mongoose');
const { Schema } = mongoose

const ReceiptSchema = Schema({
    _id: Schema.Types.ObjectId,
    // usersReceipts: [milk, chesse...],
    // userEmail: adsfa@gmail.com

});


// id:

// userreceipts:[]

// receiptTable = mongoose.model('Receipts', ReceiptSchema);

// module.exports = {
//     createData: function(inputData, callback) {
//         receiptData = new receiptTable(inputData);
//         receiptData.save(function(err, data) {
//             if(err) throw err;
//                 return callback(data);
//         })
//     }
// };

module.exports = mongoose.model('Receipts', ReceiptSchema);