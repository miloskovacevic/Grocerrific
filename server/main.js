var express = require('express');

var app = new express();
var parser = require('body-parser');

//var React = require('react/addons');

var GroceryItem = require('./models/GroceryItem');

//require('babel-register');
//baza...
require('./database');

//routes...
app.get('/', function (req, res) {
    res.render('./../app/index.ejs', {});

});

//static files serving...
app.use(express.static(__dirname + '/../tmp'));

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

//routes again...
require('./routes/items')(app);

// port listening...
app.listen(7777, function(){
    console.log('Server is listening on port 7777...');
});


