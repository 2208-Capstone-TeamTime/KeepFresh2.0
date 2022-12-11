const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProductSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String
    },
    category: {
        type: String,
        enum: ['Fruit', 'Fruits', 'Vegetable', 'Vegetables', 'Dairy', 'Protein', 'Poultry', 'Carbs', 'Seafood', 'Meats', 'Nuts and Grains', 'Condiments']
    },
    fridgeExp: {
        type: Number
    },
    fridgeMetric: {
        type: String,
        enum: ['hour', 'hours', 'day', 'days', 'week', 'weeks', 'month', 'months', 'year', 'years']
    },
    freezerExp: {
        type: Number
    },
    freezerMetric: {
        type: String,
        enum: ['day', 'days', 'week', 'weeks', 'month', 'months', 'year', 'years' ]
    },
    
});

module.exports = mongoose.model('Products', ProductSchema);