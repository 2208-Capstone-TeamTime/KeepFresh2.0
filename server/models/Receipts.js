const mongoose = require('mongoose');
const { Schema } = mongoose

const ReceiptSchema = Schema({
    _id: Schema.Types.ObjectId,
    productsId: [{type: Schema.Types.ObjectId, ref:'Products'}]
    ,
});

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