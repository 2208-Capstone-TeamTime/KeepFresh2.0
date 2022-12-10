const Products = require("../models/Products");

module.exports = {
  findAllProducts: (req, res) => {
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
  },

  calcExpiration: (req, res) => {
    const today =new Date();
        
    Products.findOne({name : req.params.name})
      .then(data => {
        const exp = {
          food:req.params.name,
          fridge:`Expires ${data.fridgeExp} ${data.fridgeMetric}, from ${today}`,
          freezer:`Expires ${data.freezerExp} ${data.freezerMetric}, from ${today}`
        }
    
          res.send(exp);
        })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        })
      })
  }
};