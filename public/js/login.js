$(document).ready(function() {
    // Getting references to our form and inputs
    var username = $("#username");
    var password = $("#password");
  
    // When the form is submitted, we validate there's an email and password entered
    $("#login").on("click", function(event) {
      event.preventDefault();
      var userData = {
        username: username.val().trim(),
        password: password.val().trim()
      };
  
      if (!userData.username || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.username, userData.password);
      username.val("");
      password.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(username, password) {
      $.post("/api/login", {
        username: username,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      }).catch(function(err) {
        console.log(err);
      });
    }
  
  });
// $(document).ready(function() {
//     // Getting references to our form and inputs
//     var loginForm = $("form.login");
//     var username = $("#username");
//     var password = $("#password");
  
//     // When the form is submitted, we validate there's an email and password entered
//     $("#login").on("click", function(event) {
//       event.preventDefault();
//       var userData = {
//         username: username.val().trim(),
//         password: password.val().trim()
//       };
  
//       if (!userData.username || !userData.password) {
//         return;
//       }
  
//       // If we have an email and password we run the loginUser function and clear the form
//       loginUser(userData.username, userData.password);
//       username.val("");
//       password.val("");
//     });
  
//     // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
//     function loginUser(username, password) {
//       $.post("/api/login", {
//         username: username,
//         password: password
//       }).then(function(data) {
//         window.location.replace(data);
//         // If there's an error, log the error
//       }).catch(function(err) {
//         console.log(err);
//       });
//     }
  
//   });