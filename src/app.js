let express = require('express');
let apiRoutes = require("./api-routes");
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', apiRoutes);

mongoose.connect('mongodb://localhost:27017/expressjsspike', { useNewUrlParser: true});
var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Running API on port " + port);
});
