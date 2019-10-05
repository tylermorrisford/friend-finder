// friend-finder
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// require files --- research these
// var htmlRoutes = require("./app/routing/htmlRoutes");
// var apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;
// use body-parser to handle json
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
// app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// })

// app.get("/survey", function(req, res){
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// })


// app.post("/survey", function(req, res){
//     var newFriend = {
//         name: req.body.inputName,
//         link: req.body.inputLink,
//         scores: [
//             parseInt(req.body.q1),
//             parseInt(req.body.q2),
//             parseInt(req.body.q3),
//             parseInt(req.body.q4),
//             parseInt(req.body.q5),
//             parseInt(req.body.q6),
//             parseInt(req.body.q7),
//             parseInt(req.body.q8),
//             parseInt(req.body.q9),
//             parseInt(req.body.q10),
//         ]
//     };
//     var friendString = JSON.stringify(newFriend);
//     // console.log('as a string = ' + friendString);
//     // console.log('new friend scores = ' + newFriend.scores);
//     // console.log('some friendly math :' + (friends[2].scores[3] + newFriend.scores[3]))
//     var maxDifference = 40;
//     var yourNewFriend = 0;
//     for (var i = 0; i<friends.length; i++) {
//         var difference = 0;
//         for (var j = 0; j<newFriend.scores.length; j++) {
//             difference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
//         }
//         // console.log('difference = ' + difference);
//         if (difference < maxDifference) {
//             yourNewFriend = i;
//             maxDifference = difference;
//             // console.log(matchName + "  " + matchImage);
//         }

//     }
//     console.log(friends[yourNewFriend].name);

//     res.json(friends[yourNewFriend])
    
//     friends.push(newFriend);
     


// });

// app.get("/api/friends", function(req, res) {
//     res.json(friends);
// })

app.listen(PORT, function() {
    console.log("App listening on local host port: " + PORT);
});