// friend-finder
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

// use body-parser to handle json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// required routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on local host port: " + PORT);
});