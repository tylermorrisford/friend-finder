var friends = require("../data/friends");

module.exports = function (app) {
    // returns friends list as json
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        // console.log('this is req.body.scores ' + req.body.scores);
        var newFriend = req.body;
        // console.log('this is a string of the new friend ' + JSON.stringify(newFriend));

        var maxDifference = 40;
        var yourNewFriend = 0;
        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                difference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
            }
            // console.log('difference = ' + difference);
            if (difference < maxDifference) {
                yourNewFriend = i;
                maxDifference = difference;
                // console.log(matchName + "  " + matchImage);
            }

        }
        // console.log(friends[yourNewFriend].name);

        res.json(friends[yourNewFriend])

        friends.push(newFriend);

    })
}