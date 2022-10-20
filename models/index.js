const mongoose = require('mongoose')
require('dotenv').config()

  

    
const url = process.env.MONGO_URL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    
    .then(()=>{
      console.log("conected to mongodb");
    }).catch(error => {
      console.log("mongo error",error);
    })



module.exports.Place = require('./places')
module.exports.Comment = require('./comment')