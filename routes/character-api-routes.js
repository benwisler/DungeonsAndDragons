var db = require("../models");
var character = require("../public/assets/js/characterGenerator.js")
var createCharacter = require("../public/assets/js/characterGenerator")
module.exports = function(app) { 
    // $("#createCharacter").on("click", function(event) {
    //     event.preventDefault();
    //     EventEmitter.createCharacter();
    app.post("/api/createCharacter", function(req, res) {
    db.Character.create(req.body).then(function(dbCharacter){
        res.json(dbCharacter)
    })
    })
    app.get("/api/displayCharacter", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Character.findAll({
          include: [db.User]
        }).then(function(dbCharacter) {
          res.json(dbCharacter);
        });
      });
}