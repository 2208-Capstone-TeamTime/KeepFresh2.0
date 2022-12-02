const mongoose = require('mongoose');
const connectDB = require('./server/config/db');
const Products = require('./server/models/Products');
const Receipts = require('./server/models/Receipts');


const milk = new Products({
   _id: new mongoose.Types.ObjectId,
  name: 'milk',
  category: 'Dairy',
  fridgeExp: 7,
  fridgeMetric: 'days',
  freezerExp: 1,
  freezerMetric: 'month'
});

const apple = new Products({
    _id: new mongoose.Types.ObjectId,
        name: 'apple',
    category: 'Fruit',
    fridgeExp: 7,
    fridgeMetric: 'days',
    freezerExp: 1,
    freezerMetric: 'month'
});

const strawberry = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'strawberry',
  category: 'Fruit',
  fridgeExp: 5,
  fridgeMetric: 'days',
  freezerExp: 2,
  freezerMetric: 'weeks'
});

const productsData = [milk, apple, strawberry];

const receipt1 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 1,
    productsId: [milk._id, apple._id]
});

const receipt2 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 2,
  productsId: [milk._id, strawberry._id]
})

const receipt3 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 3,
  productsId: [apple._id, apple._id]
})

const receiptsData = [receipt1, receipt2, receipt3];

const seed = async () => {
    try {
      await connectDB();
      await Products.deleteMany({});
      await Products.insertMany(productsData)

      await Receipts.deleteMany({});
      await Receipts.insertMany(receiptsData)
      
    } catch (err) {
      console.log(err);
    }
  };

  seed()
  //DB KEPT OPEN FOR CLOUD ACCESS -_-