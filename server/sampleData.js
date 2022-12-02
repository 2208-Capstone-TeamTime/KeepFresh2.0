const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Products = require('./models/Products');
const Receipts = require('./models/Receipts');


const milk = new Products({
   _id: new mongoose.Types.ObjectId,
  name: 'Milk',
  category: 'Dairy',
  fridgeExp: 7,
  fridgeMetric: 'days',
  freezerExp: 1,
  freezerMetric: 'month'
});

const apple = new Products({
    _id: new mongoose.Types.ObjectId,
        name: 'Apple',
    category: 'Fruit',
    fridgeExp: 7,
    fridgeMetric: 'days',
    freezerExp: 1,
    freezerMetric: 'month'
});

const productsData = [milk, apple];

const receipt1 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 1,
    productsId: [milk._id, apple._id]
});

const receipt2 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 2,
  productsId: [milk._id],
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
  

