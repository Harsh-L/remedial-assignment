const mongoose = require('mongoose');

const category_schema = new mongoose.Schema({
    c_id: Number,
    category_name: String
})
s
const category_model = mongoose.model('category', category_schema, 'categories');
module.exports = category_model;