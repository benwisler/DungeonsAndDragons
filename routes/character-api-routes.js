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

}