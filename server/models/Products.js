const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProductSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String
    },
    category: {
        type: String,
        enum: ['Fruit', 'Vegetable', 'Dairy', 'Protein', 'Poultry', 'Carbs']
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