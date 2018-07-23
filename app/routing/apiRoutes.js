var comics = require("../data/comics");
var users = require("../data/userresults");

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/users", function (req, res) {
        res.json(users);
    });

    app.get("/api/comics", function (req, res) {
        res.json(comics);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------





    app.post("/api/users", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware

        var testAgainstAll = [];

        // COMPARISON ALGORITM GOES HERE
        // subtract respective index numbers of the user from the comic's score
        for (var i = 0; i < testresults.length; i++) {
            var scoreComp = [];
            var scoreEval = Math.abs(testresults[i] - comics.score[i]);
            scoreComp.push(scoreEval);
        }
        var scoreCompTotal = scoreComp.reduce(getTotal);
        function getTotal(total, num) {
            return total + num;
        }
        testAgainstAll.push(scoreCompTotal);

        // do this for every comic in the data

        //find smallest value in testAgainstAll. 
        // Find the comic object of the same index value.


        // Return that comic


        console.log("");
    });
};
