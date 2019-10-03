// friend-finder
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// require files --- research these
// var htmlRoutes = require("./app/routing/htmlRoutes");
// var apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;
// setup express to return json
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// data
var friends = [];


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

app.post("/survey", function(req, res){
    // var newName = req.body;
    // console.log(req.body);
    var newFriend = {
        name: req.body.inputName,
        link: req.body.inputLink,
        scores: [
            parseInt(req.body.q1),
            parseInt(req.body.q2),
            parseInt(req.body.q3),
            parseInt(req.body.q4),
            parseInt(req.body.q5),
            parseInt(req.body.q6),
            parseInt(req.body.q7),
            parseInt(req.body.q8),
            parseInt(req.body.q9),
            parseInt(req.body.q10),
        ]
    };
    var friendString = JSON.stringify(newFriend);
    console.log('as a string = ' + friendString);
    console.log('new friend scores = ' + newFriend.scores);
    console.log(newFriend.scores[0] + newFriend.scores[9]);
    res.end();
});

app.listen(PORT, function() {
    console.log("App listening on local host port #" + PORT);
});