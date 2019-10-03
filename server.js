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
    // console.log(req);
    // var newName = req.body;
    // console.log(req.body);
    // console.log(req);
    var newFriend = req.body;
    friends.push(newFriend);
    console.log(friends);
    res.end();
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT + ". no really, I'm listening");
});