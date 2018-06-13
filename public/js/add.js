$("#newUserSubmit").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newUser = {
      // name from name input
      username: $("#newUsername").val().trim(),
      // role from role input
      email: $("#newEmail").val().trim(),
      password: $("#newPassword").val().trim()

    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newUser)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding user...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#newUsername").val("");
    $("#newEmail").val("");

    $("#newPassword").val("");
  
  });
  