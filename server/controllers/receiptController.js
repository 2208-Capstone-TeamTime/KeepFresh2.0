const Receipts = require("../models/Receipts")

exports.findAllReceipts = (req, res) => {

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
};