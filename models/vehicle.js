const mongoose = require('mongoose');

const vehicle_schema = new mongoose.Schema({
    vehicle_brand : String,
    category : Number,
    vehicle_pic: String,
    price : Number,
    deprecation : Number,
    no_of_years : Number,
    total_price : Number
})

const vehicle_model = mongoose.model('vehicle', vehicle_schema, 'vehicles');
module.exports = vehicle_model;