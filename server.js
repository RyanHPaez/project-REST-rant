//Dependencies
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')

// Connect to MongoDB
mongoose.connect('process.env.MONGO_URI', {useNewUrlParser: true});
mongoose.connection.once('open', function(){
  console.log('Conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});

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