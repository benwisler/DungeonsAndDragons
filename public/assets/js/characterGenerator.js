var race = Math.floor(Math.random() * 9) + 1;
var profession = Math.floor(Math.random() * 12) + 1;
var gender = Math.floor(Math.random() * 2) + 1;
var currentGender;
var sr;
var newSR;
var currentSR;
var currentJob;
var newCharacter;
var charName;

var request = require("request");

request("http://www.dnd5eapi.co/api/races/" + race, function(
  error,
  response,
  body
) {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  var currentRace = JSON.parse(body);
  console.log("-------------------------------------");
  console.log("Race:", currentRace.name);
  if (currentRace.hasOwnProperty("subraces")) {
    if (currentRace.subraces.length === 0) {
      console.log("Subrace: N/A");
      currentSR = "N/A"
    } else if (currentRace.subraces.length === 1) {
      newSR = currentRace.subraces[0];
      console.log("Subrace:", newSR.name);
      currentSR = newSR.name;
    } else {
      sr = Math.floor(Math.random() * currentRace.subraces.length);
      newSR = currentRace.subraces[sr];
      console.log("Subrace:", newSR.name);
      currentSR = newSR.name;
    }
  }
  if (gender === 1) {
    console.log("Gender: Male");
    currentGender = "Male";
  } else {
    console.log("Gender: Female");
    currentGender = "Female";
  }
  request("http://www.dnd5eapi.co/api/classes/" + profession, function(
    error,
    response,
    body
  ) {
    var newJob = JSON.parse(body);
    console.log("Job:", newJob.name);
    currentJob = newJob.name;

    newCharacter = {
        characterName: charName,
        characterGender: currentGender,
        characterRace: currentRace.name,
        characterSR: currentSR,
        characterJob: currentJob
      };
      console.log(newCharacter);
  });

});
