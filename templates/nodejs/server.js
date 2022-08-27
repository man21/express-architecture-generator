"use strict"

const http = require("http")
const port = process.env.PORT || 5000
const app = require("./app")

const server = http.createServer(app)
server.listen(port, (req, res) => {
  console.log("Server is listen at port number " + port)
})


