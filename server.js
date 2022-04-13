//Dependencies
import connectDB from './config/db.js' // DB connection
import products from './data/products.js'

require('dotenv').config();
const PORT = process.env.PORT || 3000
const mode = process.env.NODE_ENV
const express = require('express');
const app = express();
const methodOverride = require('method-override')

connectDB() //this function connects us to the DB!!!

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controllers & Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req,res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.status(404).render('error404');
})

app.listen(process.env.PORT);