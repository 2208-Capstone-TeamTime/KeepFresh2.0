const Products = require("../models/Products");

//find all products
exports.findAllProducts = (req, res) => {

     Products.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
 
    });
};

// exports.displayRec({
    
// });

//return calculated exp for product or a list of products???
//ability to query for more than one instance
exports.calcExpiration = (req, res) => {
//set current date to var
//finds product by id from req.body + returns metrics
//returns exp calc

const today =new Date();

// const record = Products.data.findOne()
// const today =new Date(record.date.getTime() - (record.offset * 60000))

Products.findOne({name : req.params.name})
    .then(data => {
      const exp = `Expires ${data.fridgeExp} ${data.fridgeMetric}, from ${today}`

      res.send(exp);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      })})
    };
