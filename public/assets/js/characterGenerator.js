var race = Math.floor(Math.random() * 9) + 1;
var profession = Math.floor(Math.random() * 12) + 1;
var gender = Math.floor(Math.random() * 2) +1;


var request = require('request');

request('http://www.dnd5eapi.co/api/races/' + race, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var currentRace = JSON.parse(body);
  console.log('-------------------------------------');
  console.log('Race:', currentRace.name);
  if(gender === 1) {
      console.log('Gender: Male');
  } else {
      console.log('Gender: Female');
  }
  request('http://www.dnd5eapi.co/api/classes/' + profession, function (error, response, body) {
    var currentJob = JSON.parse(body);
    console.log('Job:', currentJob.name);

})
})

request('http://www.dnd5eapi.co/api/classes/' + profession, function (error, response, body) {
    var currentJob = JSON.parse(body);
    console.log('Job:', currentJob.name);

})