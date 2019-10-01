// friend-finder
const express = require('express');
const path =  require('path');
// require files --- research these
// var htmlRoutes = require("./app/routing/htmlRoutes");
// var apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;
// setup express to return json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});