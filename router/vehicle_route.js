const express = require('express');
const route = express();
const category_model = require('../models/vehicle_cat');
const vehicle = require('../models/vehicle');
const multer = require('multer');
const vehicle_model = require('../models/vehicle');

// inage uploads
var storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + "_" + Date.now() + "_" + file.originalname);
    }
})

const upload = multer({
    storage: storage
});

// index
route.get('/', async (req, res) =>{
    const records = await vehicle.find();
    const category = await category_model.find();
    res.render('index',{data:records});
})

// insert
route.get('/insert',upload.single('image') ,(req, res) => {
    var data = new vehicle_model({
        vehicle_brand : String,
        category : Number,
        vehicle_pic: String,
        price : Number,
        deprecation : Number,
        no_of_years : Number,
        total_price : Number
    })

    const category = category_model.find();
    res.render('insert', {data : category});
})

// category insert
route.get('/insert', async (req, res) => {
    const category = await category_model.find();
    res.render('insert', {data : category});
})
module.exports = route;