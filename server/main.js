var express = require('express');

var app = new express();


//routes...
app.get('/', function (req, res) {
    res.render('./../app/index.ejs', {});
});

//static files serving...
app.use(express.static(__dirname + '/../tmp'));

// port listening...
app.listen(7777, function(){
    console.log('Server is listening on port 7777...');
});