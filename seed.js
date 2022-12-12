const mongoose = require('mongoose');
const connectDB = require('./server/config/db');
const Products = require('./server/models/Products');
const Receipts = require('./server/models/Receipts');
const Users = require('./server/models/Users')



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
  name: 'Beef Jerky',
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

const scallops = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Scallops',
  category: 'Seafood',
  fridgeExp: 2,
  fridgeMetric: 'days',
  freezerExp: 2,
  freezerMetric: 'months'
});

const seaBass = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Sea Bass',
  category: 'Seafood',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 3,
  freezerMetric: 'months'
});

const squid = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Squid',
  category: 'Seafood',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 10,
  freezerMetric: 'months'
});

const sushi = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Sushi',
  category: 'Seafood',
  fridgeExp: 1,
  fridgeMetric: 'day',
  freezerExp: 0,
  freezerMetric: 'days'
});

const tuna = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Tuna',
  category: 'Seafood',
  fridgeExp: 2,
  fridgeMetric: 'days',
  freezerExp: 2,
  freezerMetric: 'months'
});




// Fruits
const apple = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Apple',
  category: 'Fruit',
  fridgeExp: 7,
  fridgeMetric: 'days',
  freezerExp: 1,
  freezerMetric: 'month'
});

const apricots = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Apricots',
  category: 'Fruit',
  fridgeExp: 4,
  fridgeMetric: 'days',
  freezerExp: 10,
  freezerMetric: 'months'
});

const avocados = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Avocados',
  category: 'Fruit',
  fridgeExp: 4,
  fridgeMetric: 'days',
  freezerExp: 5,
  freezerMetric: 'months'
});

const bananas = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Bananas',
  category: 'Fruit',
  fridgeExp: 5,
  fridgeMetric: 'days',
  freezerExp: 2,
  freezerMetric: 'months'
});

const blackberries = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Blackberries',
  category: 'Fruit',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 10,
  freezerMetric: 'months'
});

const blueberries = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Blueberries',
  category: 'Fruit',
  fridgeExp: 2,
  fridgeMetric: 'days',
  freezerExp: 10,
  freezerMetric: 'months'
});

const cantaloupe = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Cantaloupe',
  category: 'Fruit',
  fridgeExp: 2,
  fridgeMetric: 'days',
  freezerExp: 10,
  freezerMetric: 'months'
});

const clementines = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Clementines',
  category: 'Fruits',
  fridgeExp: 2,
  fridgeMetric: 'weeks',
  freezerExp: 10,
  freezerMetric: 'months'
});

const cranberries = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Cranberries',
  category: 'Fruits',
  fridgeExp: 3,
  fridgeMetric: 'weeks',
  freezerExp: 10,
  freezerMetric: 'months'
});

const grapes = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Grapes',
  category: 'Fruits',
  fridgeExp: 2,
  fridgeMetric: 'weeks',
  freezerExp: 10,
  freezerMetric: 'months'
});

const grapefruit = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Grapegfruit',
  category: 'Fruits',
  fridgeExp: 3,
  fridgeMetric: 'weeks',
  freezerExp: 10,
  freezerMetric: 'months'
});

const honeydew = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Honeydew',
  category: 'Fruits',
  fridgeExp: 1,
  fridgeMetric: 'week',
  freezerExp: 10,
  freezerMetric: 'months'
});

const kiwi = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Kiwi',
  category: 'Fruits',
  fridgeExp: 4,
  fridgeMetric: 'days',
  freezerExp: 10,
  freezerMetric: 'months'
});

const lemons = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Lemons',
  category: 'Fruits',
  fridgeExp: 3,
  fridgeMetric: 'weeks',
  freezerExp: 3,
  freezerMetric: 'months'
});

const mangos = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Mango',
  category: 'Fruits',
  fridgeExp: 1,
  fridgeMetric: 'week',
  freezerExp: 10,
  freezerMetric: 'months'
});

const oranges = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Oranges',
  category: 'Fruits',
  fridgeExp: 3,
  fridgeMetric: 'weeks',
  freezerExp: 10,
  freezerMetric: 'months'
});

const peaches = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Peaches',
  category: 'Fruits',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 10,
  freezerMetric: 'months'
});

const pears = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Pears',
  category: 'Fruits',
  fridgeExp: 5,
  fridgeMetric: 'days',
  freezerExp: 10,
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

const cherries = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Cherries',
  category: 'Fruits',
  fridgeExp: 1,
  fridgeMetric: 'week',
  freezerExp: 2,
  freezerMetric: 'months'
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

const carrots = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Carrots',
  category: 'Vegetables',
  fridgeExp: 2,
  fridgeMetric: 'weeks',
  freezerExp: 6,
  freezerMetric: 'months'
});

const broccoli = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Broccoli',
  category: 'Vegetables',
  fridgeExp: 3,
  fridgeMetric: 'weeks',
  freezerExp: 4,
  freezerMetric: 'months'
});

const spinach = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Spinach',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'week',
  freezerExp: 2,
  freezerMetric: 'months'
});

const greenBeans = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Green beans',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'week',
  freezerExp: 8,
  freezerMetric: 'months'
});

const peas = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Peas',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'week',
  freezerExp: 8,
  freezerMetric: 'months'
});

const asparagus = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Asparagus',
  category: 'Vegetables',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 12,
  freezerMetric: 'months'
});

const bellPeppers = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Bell Peppers',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'week',
  freezerExp: 10,
  freezerMetric: 'months'
});

const cauliflower = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Cauliflower',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'week',
  freezerExp: 12,
  freezerMetric: 'months'
});

const corn = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Corn',
  category: 'Vegetables',
  fridgeExp: 3,
  fridgeMetric: 'days',
  freezerExp: 8,
  freezerMetric: 'months'
});

const eggplant = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Eggplant',
  category: 'Vegetables',
  fridgeExp: 5,
  fridgeMetric: 'days',
  freezerExp: 8,
  freezerMetric: 'months'
});

const garlic = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Garlic',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'month',
  freezerExp: 8,
  freezerMetric: 'months'
});

const onion = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Onion',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'month',
  freezerExp: 8,
  freezerMetric: 'months'
});

const leek = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Leek',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'month',
  freezerExp: 8,
  freezerMetric: 'months'
});

const shallot = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Shallot',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'month',
  freezerExp: 8,
  freezerMetric: 'months'
});

const scallion = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Scallion',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'month',
  freezerExp: 8,
  freezerMetric: 'months'
});

const chive = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Chive',
  category: 'Vegetables',
  fridgeExp: 1,
  fridgeMetric: 'month',
  freezerExp: 8,
  freezerMetric: 'months'
});




// Nuts and Grains
const almond = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Almond',
  category: 'Nuts and Grains',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const walnut = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Walnut',
  category: 'Nuts and Grains',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const oat = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Oat',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const quinoa = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Quinoa',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const barley = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Barley',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const pecan = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Pecan',
  category: 'Nuts and Grains',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const pistachio = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Pistachio',
  category: 'Nuts and Grains',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const rice = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Rice',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const wheat = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Wheat',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const cashew = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Cashew',
  category: 'Nuts and Grains',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const hazelnut = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Hazelnut',
  category: 'Nuts and Grains',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const rye = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Rye',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const spelt = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Spelt',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const millet = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Millet',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const brazilNut = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Brazil Nut',
  category: 'Nuts and Grains',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const macadamiaNut = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Macadamia Nut',
  category: 'Nuts and Grains',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const bulgur = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Bulgur',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const teff = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Teff',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});

const wildRice = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Wild Rice',
  category: 'Nuts and Grains',
  fridgeExp: 3,
  fridgeMetric: 'months',
  freezerExp: 6,
  freezerMetric: 'months'
});


// Condiments
const ketchup = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Ketchup',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const mustard = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Mustard',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const mayonnaise = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Mayonnaise',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const soySauce = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Soy Sauce',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const hotSauce = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Hot Sauce',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const aioli = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Aioli',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const bbqsauce = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'BBQ Sauce',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const chilioil = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Chili Oil',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const crushedPepper = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Crushed Pepper',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const garlicSauce = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Garlic Sauce',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const honey = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'honey',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const oliveoil = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Olive Oil',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const salsa = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Salsa',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'days',
  freezerExp: 12,
  freezerMetric: 'weeks'
});

const sourCream = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Sour Cream',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const sriracha = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Sriracha',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});

const teriyaki = new Products({
  _id: new mongoose.Types.ObjectId,
  name: 'Teriyaki',
  category: 'Condiments',
  fridgeExp: 6,
  fridgeMetric: 'months',
  freezerExp: 12,
  freezerMetric: 'months'
});



const productsData = [
  milk, almondMilk, coconutMilk, butterMilk, powderedMilk, eggs, stringCheese, swissCheese, parmesanCheese, romanoCheese, provoloneCheese, butter, yogurt,
  hotDogs, hamburgers, beef, groundBeef, beefJerky, beefCorned, chicken, chickenTenders, chickenWings, chickenStrips, chickenSoup, duck, bacon, pork, ham, lamb, meatballs, pastrami, turkey,
  fish, crabs, lobster, shrimp, clamChowder, clams, cod, crayFish, mahiMahi, mussels, mackerel, lox, oysters, salmon, salmonCooked, scallops, seaBass, squid, sushi,
  apple, apricots, avocados, bananas, blackberries, blueberries, cantaloupe, clementines, cranberries, grapes, grapefruit, honeydew, kiwi, lemons, mangos, oranges, peaches, pears, strawberry, cherries,
  lettuce, mushrooms, onions, potato, carrots, broccoli, spinach, greenBeans, peas, asparagus, bellPeppers, cauliflower, corn, eggplant, garlic, onion, leek, shallot, scallion, chive,
  almond, walnut, oat, quinoa, barley, pecan, pistachio, rice, wheat, cashew, hazelnut, rye, spelt, millet, brazilNut, macadamiaNut, bulgur, teff, wildRice,
  ketchup, mustard, mayonnaise, soySauce, hotSauce, aioli, bbqsauce, chilioil, crushedPepper, garlicSauce, oliveoil, honey, salsa, sourCream, sriracha, teriyaki
];

const receipt1 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 1,
  products: [milk._id, apple._id]
});

const receipt2 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 2,
  products: [milk._id, strawberry._id]
})

const receipt3 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 3,
  products: [apple._id, apple._id]
})

const receipt4 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 4,
    products: [cheese._id, apple._id, hotDogs._id, beef._id, chicken._id, oranges._id, lettuce._id, shrimp._id]
});

const receipt5 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 5,
  products: [milk._id, pork._id, fish._id, crabs._id, bacon._id, oranges._id, cherry._id, lettuce._id, onions._id, potato._id, eggs._id, lobster._id, cheese._id],
})

const receipt6 = new Receipts({
  _id: new mongoose.Types.ObjectId,
  transaction: 6,
  products: [apple._id, apple._id, stringCheese._id, hotDogs._id, beefJerky._id, fish._id, eggs._id, shrimp._id, eggs._id, strawberry._id, cherry._id, lettuce._id, mushrooms._id, onions._id]
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
  //DB KEPT OPEN FOR CLOUD ACCESS -_-