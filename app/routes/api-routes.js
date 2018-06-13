// =============================================================
var db = require("../../models");
var User = require("../../models")
var express = require('express');
// Routes
// =============================================================
module.exports = function(app) {
  // If a user sends data to add a new character...
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
