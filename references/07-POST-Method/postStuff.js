var http = require("http");
var fs = require("fs");

const PORT = 7200;

var server = http.createServer(handReq);

function handReq(req, res) {
    var requestData = "";

    req.on("data", function (data) {
        requestData += data;
    });

    var path = req.url;

    switch (path) {
        case "/":
        return serveFile("index.html", res);
        break;

        default:
        return display404(path, req, res);
    }

    req.on("end", function () {
        console.log("You did a", req.method, "with the data:\n", requestData);
        console.log(word)
        res.end();
    })
}

function serveFile(fileName, res) {
    fs.readFile(__dirname + "/" + fileName, function (err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    })

// Start our server
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
}

var word = document.getElementById("a-word").val();