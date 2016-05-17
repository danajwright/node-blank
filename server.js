var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view fie

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// work page
app.get('/work', function(req, res) {
    res.render('pages/work');
});

// track page
app.get('/track', function(req, res) {
    res.render('pages/track');
});

// pod page
app.get('/pod', function(req, res) {
    res.render('pages/pod');
});

// quote page
app.get('/quote', function(req, res) {
    res.render('pages/quote');
});



// equip page
app.get('/equip', function(req, res) {
    res.render('pages/equip');
});

// careers page
app.get('/careers', function(req, res) {
    res.render('pages/careers');
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

// documents page
app.get('/docs', function(req, res) {
    res.render('pages/docs');
});

app.listen(port);
console.log('Server listening on ' + port);









