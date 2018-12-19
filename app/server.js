var express = require("express");



var app = express();



var PORT = process.env.PORT || 8089;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes//

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//LISTENER//

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});