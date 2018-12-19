//Linking routes to a specific data source//
var friends = require("../data/friends");

//Routing//

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);

    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body.scores);
        var scoreArr = [];
        var newUser = req.body;
 
        console.log(newUser); //New user appended to list
        //the 'newScoreTotal' function adds up the users choices and returns a number//
        var newScoreTotal = newUser.scores.reduce(function (a, b) { return parseInt(a) + parseInt(b); }, 0);
        console.log(newScoreTotal);

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]); // a friend from the list
            var scoreTotal = friends[i].scores.reduce(function (a, b) { return a + b; }, 0);
            console.log(scoreTotal);
            //creates array of friendlist score totals//

            if ((scoreTotal - newScoreTotal) < 0) {
                var j = (scoreTotal - newScoreTotal) * -1;
                scoreArr.push(j);

            } else {
                scoreArr.push(scoreTotal - newScoreTotal);
            }

        };
        // console.log(scoreArr);
        var smallestDiff = {
            index: 0,
            diff: 60
        };

        for (var i = 0; i < scoreArr.length; i++) {
            if (scoreArr[i] <= smallestDiff.diff) {
                smallestDiff = {
                    index: i,
                    diff: scoreArr[i]
                };

            };
        };
        console.log(friends[smallestDiff.index]);

        res.json(friends[smallestDiff.index]);
        
    });

};

