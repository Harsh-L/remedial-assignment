const express = require('express');
require('dotenv').config();
const app = express();
const connect = require('./config/db');
const route = require('./router/vehicle_route');
app.set('view engine', 'ejs');
app.use(express.static('uploads'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/vehicle', route);

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}/vehicle/`);
})