/* jshint node: true */
"use strict";
let express = require("express"),
  app = express()

app.use( express.static(__dirname + "/../client") )
app.listen(8181, () => console.log( "Listening on 8181" ))
