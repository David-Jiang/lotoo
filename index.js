var express = require("express")
var app = express()

app.use(express.static(__dirname + "/dist"))

app.all("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html")
})

var server = app.listen(3000, () => {
  console.log(`server is running at port : ${server.address().port}`)
})
