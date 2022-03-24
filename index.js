// adding a PORT variable using this file for other important private data, like database connection strings. Port added in .env file
require('dotenv').config()


// Require needed modules.
const express = require('express')

// Initialize the app object
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Controllers & Routes
app.use('/places', require('./controllers/places'))

// Create a homepage route.
app.get('/', (req, res) => {
    res.render('home')
  })  

// Create a second route. Needs to go at the end because '*'
app.get('*', (req, res) => {
    res.render('error404')
  })
  


// Listen for connections.
app.listen(process.env.PORT)



