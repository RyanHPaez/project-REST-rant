import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js' // DB connection


dotenv.config()
const PORT = process.env.PORT || 3005
const mode = process.env.NODE_ENV



connectDB() //this function connects us to the DB!!!

//Dependencies
require('dotenv').config({ path: 'process.env.MONGO_URI' });
const express = require('express');

const methodOverride = require('method-override')


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