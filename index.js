// adding a PORT variable using this file for other important private data, like database connection strings. Port added in .env file
require('dotenv').config()

// Require needed modules.
const express = require('express')

// Initialize the app object
const app = express()

//gets folder and file made to use in Rest-Rant folder
app.use('/places', require('./controllers/places'))

// Create a homepage route.
app.get('/', (req, res) => {
     // This gets sent to the client 
    // (your web browser most likely!)
    res.send('Hello world!')
})
// Create a second route. Needs to go at the end because '*'
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
// Listen for connections.
app.listen(process.env.PORT)