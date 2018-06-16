// var characters = require("../public/assets/js/characterGenerator.js")

$(document).ready(function () {
    var createCharacter = require("../public/assets/js/characterGenerator.js")
    $("#createCharacter").on("click", function() {
        event.preventDefault()
        createCharacter();
    $.post("/api/createCharacter", {
        characterHP: newChar.characterHP,
        characterGender: newChar.characterGender,
        characterRace: newChar.characterRace,
        characterSR: newChar.characterSR,
        characterJob: newChar.characterJob,
        characterAttr: newChar.characterAttr,
        characterProf: newChar.characterProf
    }).then(function(data) {
      window.location.replace(data);
      alert("Adding character...");
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });

    })
    
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page

    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
    });

    })
 
// function createCharacter() {
//     $.post("/api/createCharacter", {
//         characterHP: characterHP,
//         characterGender: currentGender,
//         characterRace: currentRace.name,
//         characterSR: currentSR,
//         characterJob: currentJob,
//         characterAttr: combAttr,
//         characterProf: charProf
//     }).then(function(data) {
//       window.location.replace(data);
//       alert("Adding character...");
//       // If there's an error, log the error
//     }).catch(function(err) {
//       console.log(err);
//     });
//   }