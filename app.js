// importing modules

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

// initialize express
var app = express();

// import route path
const route = require('./routes/route');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//success mongodb connection
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb @27017');
});

//failed mongodb connection
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error database connection' + err);
    }
});
//port
const port = 3000;

// adding middleware
app.use(cors());

// body parser
app.use(bodyparser.json());

// static
app.use(express.static(path.join(__dirname, 'public')));

// use route
app.use('/api', route);

// testing
app.listen(port, () => {
    console.log("the server is running" + port);
});