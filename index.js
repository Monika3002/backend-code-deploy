require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubdata = require('./data.json')
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/about', 
(req, res) => {
  res.send('about page')
})
app.get('/contact', (req, res) => {
  res.send('contact page')
})

app.get('/github',(req, res) => {
  res.json(githubdata)
})
//this listens to the port is used to start the server without this the server will not start
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})