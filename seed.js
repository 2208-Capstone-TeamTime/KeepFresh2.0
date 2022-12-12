const mongoose = require('mongoose');
const connectDB = require('./server/config/db');
const Products = require('./server/models/Products');
const Receipts = require('./server/models/Receipts');



//  Dairy Products
const milk = new Products({
   _id: new mongoose.Types.ObjectId,
  name: 'Milk',
  category: 'Dairy',
  fridgeExp: 7,
  fridgeMetric: 'days',
  freezerExp: 1,
  freezerMetric: 'month'
});

const almondMilk = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Almond Milk',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const coconutMilk = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Coconut Milk',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const butterMilk = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Butter Milk',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const powderedMilk = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Powdered Milk',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const eggs = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Eggs',
 category: 'Dairy',
 fridgeExp: 3,
 fridgeMetric: 'weeks',
 freezerExp: 0,
 freezerMetric: 'day'
 });

 const butter = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Butter',
 category: 'Dairy',
 fridgeExp: 1,
 fridgeMetric: 'month',
 freezerExp: 1,
 freezerMetric: 'year'
 });

 const yogurt = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Yogurt',
 category: 'Dairy',
 fridgeExp: 4,
 fridgeMetric: 'days',
 freezerExp: 2,
 freezerMetric: 'months'
 });

 const swissCheese = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Swiss Cheese',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const stringCheese = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'String Cheese',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const romanoCheese = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Romano Cheese',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const parmesanCheese = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Parmesan Cheese',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const provoloneCheese = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Provolone Cheese',
 category: 'Dairy',
 fridgeExp: 7,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});





// Meat & Poultry Products
const hotDogs = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'Hot Dogs',
   category: 'Meat',
   fridgeExp: 7,
   fridgeMetric: 'days',
   freezerExp: 3,
   freezerMetric: 'months'
});

const hamburgers = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'Hamburgers',
  category: 'Meat',
  fridgeExp: 7,
  fridgeMetric: 'days',
  freezerExp: 3,
  freezerMetric: 'months'
});

const beef = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Beef',
 category: 'Meat',
 fridgeExp: 3,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const groundBeef = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Ground Beef',
 category: 'Meat',
 fridgeExp: 3,
 fridgeMetric: 'days',
 freezerExp: 3,
 freezerMetric: 'month'
});

const beefJerky = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Beef',
 category: 'Meat',
 fridgeExp: 3,
 fridgeMetric: 'months',
 freezerExp: 0,
 freezerMetric: 'days'
});

const beefCorned = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Corned Beef',
 category: 'Meat',
 fridgeExp: 3,
 fridgeMetric: 'days',
 freezerExp: 2,
 freezerMetric: 'months'
});

const chicken = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'Chicken',
   category: 'Meat',
   fridgeExp: 2,
   fridgeMetric: 'days',
   freezerExp: 1,
   freezerMetric: 'month'
});

const chickenTenders = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'Chicken Tenders',
  category: 'Meat',
  fridgeExp: 5,
  fridgeMetric: 'days',
  freezerExp: 6,
  freezerMetric: 'months'
});

const chickenStrips = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'Chicken Strips',
  category: 'Meat',
  fridgeExp: 5,
  fridgeMetric: 'days',
  freezerExp: 6,
  freezerMetric: 'months'
});

const chickenWings = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'Chicken Wings',
  category: 'Meat',
  fridgeExp: 5,
  fridgeMetric: 'days',
  freezerExp: 6,
  freezerMetric: 'months'
});

const chickenSoup = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'Chicken Noodle Soup',
  category: 'Meat',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 2,
  freezerMetric: 'months'
});

const duck = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'Duck',
  category: 'Meat',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 2,
  freezerMetric: 'months'
});

const bacon = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Bacon',
 category: 'Meat',
 fridgeExp: 2,
 fridgeMetric: 'days',
 freezerExp: 1,
 freezerMetric: 'month'
});

const pork = new Products({
   _id: new mongoose.Types.ObjectId,
   name: 'Pork',
   category: 'Meat',
   fridgeExp: 5,
   fridgeMetric: 'days',
   freezerExp: 4,
   freezerMetric: 'months'
});

const ham = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Ham',
  category: 'Meat',
  fridgeExp: 5,
  fridgeMetric: 'days',
  freezerExp: 4,
  freezerMetric: 'months'
});

const lamb = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Lamb',
  category: 'Meat',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 4,
  freezerMetric: 'months'
});

const meatballs = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Meatballs',
  category: 'Meat',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 3,
  freezerMetric: 'months'
});

const pastrami = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Pastrami',
  category: 'Meat',
  fridgeExp: 5,
  fridgeMetric: 'days',
  freezerExp: 3,
  freezerMetric: 'months'
});

const turkey = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Turkey',
  category: 'Meat',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 3,
  freezerMetric: 'months'
});






// Seafood Products
const fish = new Products({
 _id: new mongoose.Types.ObjectId,
name: 'Fish',
category: 'Seafood',
fridgeExp: 1,
fridgeMetric: 'day',
freezerExp: 6,
freezerMetric: 'months'
});

const crabs = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'Fresh Crab',
  category: 'Seafood',
  fridgeExp: 2,
  fridgeMetric: 'days',
  freezerExp: 3,
  freezerMetric: 'months'
});

const lobster = new Products({
 _id: new mongoose.Types.ObjectId,
name: 'Fresh Lobster',
category: 'Seafood',
fridgeExp: 3,
fridgeMetric: 'days',
freezerExp: 2,
freezerMetric: 'months'
});

const shrimp = new Products({
  _id: new mongoose.Types.ObjectId,
      name: 'Fresh Shrimp',
  category: 'Seafood',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 6,
  freezerMetric: 'months'
});

const clamChowder = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Clam Chowder',
 category: 'Seafood',
 fridgeExp: 3,
 fridgeMetric: 'days',
 freezerExp: 4,
 freezerMetric: 'months'
 });

 const clams = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Clams',
 category: 'Seafood',
 fridgeExp: 3,
 fridgeMetric: 'days',
 freezerExp: 3,
 freezerMetric: 'months'
 });

 const cod = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Cod',
 category: 'Seafood',
 fridgeExp: 1,
 fridgeMetric: 'day',
 freezerExp: 6,
 freezerMetric: 'months'
 });

 const crayFish = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Crayfish',
 category: 'Seafood',
 fridgeExp: 3,
 fridgeMetric: 'day',
 freezerExp: 4,
 freezerMetric: 'months'
 });

 const mahiMahi = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Mahi-Mahi',
 category: 'Seafood',
 fridgeExp: 3,
 fridgeMetric: 'days',
 freezerExp: 3,
 freezerMetric: 'months'
 });

const mussels = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Mussels',
 category: 'Seafood',
 fridgeExp: 3,
 fridgeMetric: 'days',
 freezerExp: 3,
 freezerMetric: 'months'
 });

 const mackerel = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Mackerel',
 category: 'Seafood',
 fridgeExp: 2,
 fridgeMetric: 'days',
 freezerExp: 2,
 freezerMetric: 'months'
 });

 const lox = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Lox',
 category: 'Seafood',
 fridgeExp: 2,
 fridgeMetric: 'weeks',
 freezerExp: 2,
 freezerMetric: 'months'
 });

 const oysters = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Oysters',
 category: 'Seafood',
 fridgeExp: 2,
 fridgeMetric: 'days',
 freezerExp: 2,
 freezerMetric: 'months'
 });

 const salmon = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Fresh Salmon',
 category: 'Seafood',
 fridgeExp: 2,
 fridgeMetric: 'days',
 freezerExp: 2,
 freezerMetric: 'months'
 });

 const salmonCooked = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Coocked Salmon',
 category: 'Seafood',
 fridgeExp: 3,
 fridgeMetric: 'days',
 freezerExp: 4,
 freezerMetric: 'months'
 });



 // Fruits
 const oranges = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'Oranges',
   category: 'Fruits',
   fridgeExp: 1,
   fridgeMetric: 'week',
   freezerExp: 2,
   freezerMetric: 'months'
 });
 
 const strawberry = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Strawberries',
 category: 'Fruits',
 fridgeExp: 1,
 fridgeMetric: 'week',
 freezerExp: 2,
 freezerMetric: 'months'
 });
 
 const cherry = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'Cherries',
   category: 'Fruits',
   fridgeExp: 1,
   fridgeMetric: 'week',
   freezerExp: 2,
   freezerMetric: 'months'
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




 // Vegetables
 const lettuce = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Lettuce',
 category: 'Vegetables',
 fridgeExp: 2,
 fridgeMetric: 'weeks',
 freezerExp: 2,
 freezerMetric: 'months'
 });
 
 const mushrooms = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'Mushrooms',
   category: 'Vegetables',
   fridgeExp: 2,
   fridgeMetric: 'weeks',
   freezerExp: 2,
   freezerMetric: 'months'
 });
 
 const onions = new Products({
  _id: new mongoose.Types.ObjectId,
 name: 'Onions',
 category: 'Vegetables',
 fridgeExp: 2,
 fridgeMetric: 'weeks',
 freezerExp: 4,
 freezerMetric: 'months'
 });
 
 const potato = new Products({
   _id: new mongoose.Types.ObjectId,
       name: 'Potatos',
   category: 'Vegetables',
   fridgeExp: 4,
   fridgeMetric: 'months',
   freezerExp: 1,
   freezerMetric: 'year'
 });




 // Condinments




const productsData = [
  milk, almondMilk, coconutMilk, butterMilk, powderedMilk, eggs, stringCheese, swissCheese, parmesanCheese, romanoCheese, provoloneCheese, butter, yogurt,
  hotDogs, hamburgers, beef, groundBeef, beefJerky, beefCorned, chicken, chickenTenders, chickenWings, chickenStrips, chickenSoup, duck, bacon, pork, ham, lamb, meatballs, pastrami, turkey,
  fish, crabs, lobster, shrimp, clamChowder, clams, cod, crayFish, mahiMahi, mussels, mackerel, lox, oysters, salmon, salmonCooked,
  apple, oranges, strawberry, cherry, 
  lettuce, mushrooms, onions, potato,
];

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
      await Products.deleteMany({});
      await Products.insertMany(productsData)

      await Receipts.deleteMany({});
      await Receipts.insertMany(receiptsData)
      
    } catch (err) {
      console.log(err);
    }
  };

  seed()
  //DB KEPT OPEN FOR CLOUD ACCESS -_-git