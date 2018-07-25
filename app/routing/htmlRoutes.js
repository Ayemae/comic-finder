var path = require("path");

module.exports = function(app) {
  
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    app.get("/style", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/assets/style.css"));
    });

    app.get("/style-reset", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/assets/reset.css"));
    });

    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
  