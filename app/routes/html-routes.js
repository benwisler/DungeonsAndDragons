var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/login.html"));
  });
  app.get("/main", function(req,res) {
      res.sendFile(path.join(__dirname, "../../public/main.html"))
  })

};