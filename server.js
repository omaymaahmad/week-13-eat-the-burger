const express = require("express"); 
const routes = require("./controllers/burgers_controllers");
const expressHb = require("express-handlebars");
const PORT = process.env || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(routes);
app.engine("handlebars", expressHb({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.listen(PORT, () => console.log("app is running on" + PORT));