const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const vehicle = require('../models/vehicle');
const category = require('../models/vehicle_cat');

const options = multer.diskStorage({
    destination : function(req, file, cb) 
    {
        cb(null, './uploads')
    },
    filename : function(req, file, cb)
    {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: options });


router.get('/', (req, res) => {
    vehicle.find((err, data) => {
        if(err) throw err;
        res.render('show', {data: data});
    });
});

router.get('/insert', (req, res) => {
    category.find((err, data) => {
        if(err) throw err;
        res.render('insert', {data: data});
    });
});

router.post('/insert', upload.single('myfile'), (req, res) => {
    var insert_data = new vehicle({
        vehicle_brand: req.body.brand,
        category_name: req.body.cat,
        vehicle_picture: req.body.vehicle_pic,
        price: req.body.price,
        depreciation: req.body.dep,
        number_of_years: req.body.years,
        total_price: req.body.tprice
    });
    insert_data.save((err, data) => {
        if(err) throw err;
        res.send("Inserted Successfully...");
    })
});

module.exports = router;