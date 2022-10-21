require('dotenv').config()
const mongoose = require('mongoose')
  

    
mongoose.connect("mongodb+srv://", {
      
    
    }).then(()=>{
      console.log("conected to mongodb");
    }).catch(error => {
      console.log("mongo error",error);
    })



module.exports.Place = require('./places')
module.exports.Comment = require('./comment')