const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json({extended: true}))
app.use(express.urlencoded())
const port = 3000

mongoose.connect('mongodb://%20linroot:ACA1D7OAlmJ%24wpU5@lin-28005-15040-mysql-primary-private.servers.linodedb.net-27017/?authMechanism=DEFAULT&tlsInsecure=true&tlsAllowInvalidHostnames=true&tlsAllowInvalidCertificates=true&tls=true', function(error) {

  if(!error){  

  console.log("Successfully Connected", )
  }
});

//Endpoints to serve the HTML
app.get('/', (req, res) => {
    res.sendFile("pages/index.html", {root: __dirname})
})

app.get('/login', (req, res) => {
    res.sendFile("pages/login.html", {root: __dirname})
  })

  app.get('/signup', (req, res) => {
    res.sendFile("pages/signup.html.html", {root: __dirname})
  })

//Endpoints for APIs
  app.post('/getnotes', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/signup.html.html", {root: __dirname})
  })
  
  app.post('/login', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/signup.html.html", {root: __dirname})
  })
  
  app.post('/signup', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/signup.html.html", {root: __dirname})
  })
  
  app.post('/addnote', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/signup.html.html", {root: __dirname})
  })
  
  app.post('/deletenote', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/signup.html.html", {root: __dirname})
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})