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
}

//find all products
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

calcExpiration:(req, res) => {
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
}

//find all products
// exports.findAllProducts = (req, res) => {

//      Products.find({})
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving products."
//       });
 
//     });
// };

// exports.displayRec({
    
// });

//return calculated exp for product or a list of products???
//ability to query for more than one instance
// exports.calcExpiration = (req, res) => {

  const today =new Date();
  
  Products.findOne({name : req.params.name})
      .then(data => {
        const exp = {
          food:req.params.name,
          info:`Expires ${data.fridgeExp} ${data.fridgeMetric}, from ${today}`}
  
        res.send(exp);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        })})
      }
};
