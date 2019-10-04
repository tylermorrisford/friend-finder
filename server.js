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
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
// app.use(express.json());

// data
var friends = [
    {
        'name': 'kerry',
        'link': 'images/kerry.jpg',
        'scores': [2,5,4,4,3,4,5,2,5,4]
    },
    {
        'name': 'cesar',
        'link': 'images/cesar.jpg',
        'scores': [4,5,4,3,4,2,4,3,4,4]
    },
    {
        'name': 'alex',
        'link': 'images/alex.jpg',
        'scores': [2,3,1,3,1,2,1,3,4,1]
    },
    {
        'name': 'sam',
        'link': 'images/sam.jpg',
        'scores': [5,3,4,5,4,5,5,4,4,3]
    }
];


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

app.get("api/friends", function(req, res) {
    res.json(friends);
})

app.post("/survey", function(req, res){
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
    console.log('some friendly math :' + (friends[2].scores[3] + newFriend.scores[3]))
    friends.push(newFriend);
    res.json(friends);
    res.end();
});

app.listen(PORT, function() {
    console.log("App listening on local host port #" + PORT);
});