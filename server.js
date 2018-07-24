var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

var PORT = process.env.PORT || 4010;

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Server listening on port " + PORT)
});