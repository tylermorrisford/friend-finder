// friend-finder
const express = require('express');
const path =  require('path');

var app = express();
var PORT = 8080;
// setup express to return json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.send('teef this site is killer, my buddd!');
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});