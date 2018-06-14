// =============================================================
var db = require("../models");
var User = require("../models")
var express = require('express');
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function(app) {
  // If a user sends data to add a new character...
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/home");
  })
  app.post("/api/new", function(req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  })
}
