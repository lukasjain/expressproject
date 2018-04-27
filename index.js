var express = require('Express');
var app = express();

var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views','./views');

var things = require('./things.js');

app.use(function(req, res, next){
   console.log("start");
   next();
});

app.use('/things', things);

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      user: {name: "Ayush", age: "20"}
   });
});



app.get('/first_template', function(req, res){
   res.render('first_view');
});

app.get('/', function(req, res){
  res.send("ok");
  console.log("end");
});
app.listen(3000);
