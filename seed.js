const mongoose = require('mongoose');
const connectDB = require('./server/config/db');
const Products = require('./server/models/Products');
const Receipts = require('./server/models/Receipts');
const Users = require('./server/models/Users')


const Test = new Users({
  _id: new mongoose.Types.ObjectId,
  displayName: 'Test',
  email: 'test@gmail.com'
});

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

const cheese = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'cheese',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const hotDogs = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'hot dogs',
   category: 'Protein',
   fridgeExp: 7,
   fridgeMetric: 'days',
   freezerExp: 3,
   freezerMetric: 'months'
});

const beef = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'beef',
 category: 'Protein',
 fridgeExp: 3,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const chicken = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'chicken',
   category: 'Protein',
   fridgeExp: 2,
   fridgeMetric: 'days',
   freezerExp: 1,
   freezerMetric: 'month'
});

const bacon = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'bacon',
 category: 'Protein',
 fridgeExp: 2,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const pork = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'pork',
   category: 'Protein',
   fridgeExp: 5,
   fridgeMetric: 'days',
   freezerExp: 4,
   freezerMetric: 'months'
});

const fish = new Products({
 _id: new mongoose.Types.ObjectId,
name: 'fish',
category: 'Seafood',
fridgeExp: 1,
fridgeMetric: 'day',
freezerExp: 12,
freezerMetric: 'months'
});

const crabs = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'fresh crab',
  category: 'Seafood',
  fridgeExp: 2,
  fridgeMetric: 'days',
  freezerExp: 3,
  freezerMetric: 'months'
});

const lobster = new Products({
 _id: new mongoose.Types.ObjectId,
name: 'fresh lobster',
category: 'Seafood',
fridgeExp: 3,
fridgeMetric: 'days',
freezerExp: 2,
freezerMetric: 'months'
});

const shrimp = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'fresh shrimp',
  category: 'Seafood',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 6,
  freezerMetric: 'months'
});

const eggs = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'eggs',
 category: 'Protein',
 fridgeExp: 3,
 fridgeMetric: 'weeks',
 freezerExp: 0,
 freezerMetric: 'day'
 });
 
 const oranges = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'oranges',
   category: 'Fruits',
   fridgeExp: 1,
   fridgeMetric: 'week',
   freezerExp: 2,
   freezerMetric: 'months'
 });
 
 const strawberry = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'strawberries',
 category: 'Fruits',
 fridgeExp: 1,
 fridgeMetric: 'week',
 freezerExp: 2,
 freezerMetric: 'months'
 });
 
 const cherry = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'cherries',
   category: 'Fruits',
   fridgeExp: 1,
   fridgeMetric: 'week',
   freezerExp: 2,
   freezerMetric: 'months'
 });

 const lettuce = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'lettuce',
 category: 'Vegetables',
 fridgeExp: 2,
 fridgeMetric: 'weeks',
 freezerExp: 2,
 freezerMetric: 'months'
 });
 
 const mushrooms = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'mushrooms',
   category: 'Vegetables',
   fridgeExp: 2,
   fridgeMetric: 'weeks',
   freezerExp: 2,
   freezerMetric: 'months'
 });
 
 const onions = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'onions',
 category: 'Vegetables',
 fridgeExp: 2,
 fridgeMetric: 'weeks',
 freezerExp: 4,
 freezerMetric: 'months'
 });
 
 const potato = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'potatos',
   category: 'Vegetables',
   fridgeExp: 4,
   fridgeMetric: 'months',
   freezerExp: 1,
   freezerMetric: 'year'
 });

const productsData = [milk, apple, cheese, hotDogs, beef, chicken, bacon, pork, fish, crabs, lobster, shrimp, eggs, oranges, strawberry, cherry, lettuce, mushrooms, onions, potato];

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

const receipt4 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 4,
    productsId: [cheese._id, apple._id, hotDogs._id, beef._id, chicken._id, oranges._id, lettuce._id, shrimp._id]
});

const receipt5 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 5,
  productsId: [milk._id, pork._id, fish._id, crabs._id, bacon._id, oranges._id, cherry._id, lettuce._id, onions._id, potato._id, eggs._id, lobster._id, cheese._id],
})

const receipt6 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 6,
  productsId: [apple._id, apple._id, cheese._id, hotDogs._id, beef._id, fish._id, eggs._id, shrimp._id, eggs._id, strawberry._id, cherry._id, lettuce._id, mushrooms._id, onions._id]
})

const receiptsData = [receipt1, receipt2, receipt3, receipt4, receipt5, receipt6];

const seed = async () => {
    try {
      await connectDB();

      await Users.deleteMany({});
      await Users.insertMany(Test);

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