var path = require("path");

//ROUTING//

module.exports = function(app) {

    //HTML GET requests//
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //send user to homepage if pathway cannot be found//
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};