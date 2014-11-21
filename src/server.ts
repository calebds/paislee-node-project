import express = require("express")

var app = express()

app.get('/', function (req, res) {
  res.send('Hello Calebz')
})

app.listen(3000)