//Linking routes to a specific data source//
var friends = require("../data/friends");

//Routing//

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);

    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body.scores);

        var newUser = req.body;
        // var scoreTotal = 0;
        console.log(newUser); //New user appended to list
        var newScoreTotal = newUser.scores.reduce(function (a, b) { return a + b; }, 0);
        console.log(newScoreTotal);

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]); // a friend from the list
            var scoreTotal = friends[i].scores.reduce(function (a, b) { return a + b; }, 0);
            console.log(scoreTotal);
        }


    });

};

