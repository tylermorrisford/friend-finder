var friends = require("../data/friends");

module.exports = function(app) {
// returns friends list as json
app.get("api/friends", function(req, res) {
    res.json(friends);
})

app.post("api/friends", function(req, res) {
    console.log(req.body.scores);
    console.log(JSON.stringify(newFriend));
    
        // var newFriend = {
        //     name: req.body.inputName,
        //     link: req.body.inputLink,
        //     scores: [
        //         parseInt(req.body.q1),
        //         parseInt(req.body.q2),
        //         parseInt(req.body.q3),
        //         parseInt(req.body.q4),
        //         parseInt(req.body.q5),
        //         parseInt(req.body.q6),
        //         parseInt(req.body.q7),
        //         parseInt(req.body.q8),
        //         parseInt(req.body.q9),
        //         parseInt(req.body.q10),
        //     ]
        // };
        // console.log('new friend scores = ' + newFriend.scores);
        // console.log('some friendly math :' + (friends[2].scores[3] + newFriend.scores[3]))
        var maxDifference = 40;
        var yourNewFriend = 0;
        for (var i = 0; i<friends.length; i++) {
            var difference = 0;
            for (var j = 0; j<newFriend.scores.length; j++) {
                difference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
            }
            // console.log('difference = ' + difference);
            if (difference < maxDifference) {
                yourNewFriend = i;
                maxDifference = difference;
                // console.log(matchName + "  " + matchImage);
            }
    
        }
        console.log(friends[yourNewFriend].name);
    
        res.json(friends[yourNewFriend])
        
        friends.push(newFriend);
    
})
}