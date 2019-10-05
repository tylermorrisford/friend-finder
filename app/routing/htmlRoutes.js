var path = require("path");
// html routes

module.exports = function(app) {
    
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // catch-all for home route, loaded after specific route; required in server after api routes
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

