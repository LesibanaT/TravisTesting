'use strict'

let path = require('path')
let express = require('express')
let app = express()
//loading body-parser
let bodyParser = require('body-parser');
//loading our routers
let classRouter = require("./classRoutes");
let mainRouter = require("./mainRoutes")

//tell express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", mainRouter);
app.use("/class", classRouter);

app.listen(3000);
console.log("Express server running on port 3000");
