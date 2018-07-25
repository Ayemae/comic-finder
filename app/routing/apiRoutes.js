var comics = require("../data/comics");

module.exports = function (app) {
    

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

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


    var testResults = [];


    app.post("/api/users", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware

        var testAgainstAll = [];
        // var scoreComp = [];
        testResults = req.body.responses;
        console.log(testResults);

        // COMPARISON ALGORITM GOES HERE
        // subtract respective index numbers of the user from the comic's score
        for (var c = 0; c < comics.length; c++) {
            var scoreComp = 0;
            // loops through the scores of every individual comic
            for (var i = 0; i < testResults.length; i++) {
                var scoreEval = Math.abs(testResults[i] - comics[c].scores[i]);
                scoreComp += scoreEval;
            }

            testAgainstAll.push(scoreComp);

        }
        console.log(testAgainstAll)





        //find smallest value in testAgainstAll. 
        Array.min = function (array) {
            return Math.min.apply(Math, array);
        };
        // Find the comic object of the same index value.

        var minimum = Array.min(testAgainstAll);
        var indexes = getAllIndexes(testAgainstAll, minimum);
        //var key = testAgainstAll.indexOf(minimum);
        var allRecs = getAllRecs();
        console.log(allRecs)

        // Return that comic
        // console.log(comics[key]);
        res.json(allRecs);

        function getAllIndexes(arr, val) {
            var indexes = [], i = -1;
            while ((i = arr.indexOf(val, i+1)) != -1){
                indexes.push(i);
            }
            return indexes;
        }

        function getAllRecs () {
            for (var i = 0; i < indexes.length; i++) {
                return comics[(indexes[i])];
            }
        }
    });



};
