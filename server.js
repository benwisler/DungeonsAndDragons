
var express = require('express');
var app = express();
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load();
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);
//Models


app.get('/', function(req, res) {

  console.log("You're in!")
 
});
var models = require("./app/models");
var authRoute = require('./app/routes/auth.js')(app, passport);
require('./app/config/passport.js')(passport, models.user);
//load passport strategies

//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
 
app.listen(8080, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});