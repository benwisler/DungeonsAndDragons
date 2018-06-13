var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/login.html"));
  });
  app.get("/createAccount", function(req,res) {
      res.sendFile(path.join(__dirname, "../../public/createAccount.html"))
  });
  app.get("/home", function(req,res) {
    res.sendFile(path.join(__dirname, "../../public/home.html"))
})

};
