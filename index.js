require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('Hello Arti How are You?')
  })

app.get('/youtube', (req, res) => {
    res.send('Its your channel')
  })
app.get('/insta', (req, res) => {
    res.send("<h1>It is you instagram</h1>")
  })
  
  

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})