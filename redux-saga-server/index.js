const express = require('express')
var cors = require("cors")
const app = express()
const port = 8081

var corsOptions = {
  origin: "http://localhost/3000",
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req,res) => {
  res.send
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})