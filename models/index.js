require('dotenv').config()
const mongoose = require('mongoose')
  

    
mongoose.connect("mongodb+srv://Solosnail:ZsVL6VBScJDTJPw@cluster0.6mr3r.mongodb.net/project-REST-rant", {

    
    }).then(()=>{
      console.log("conected to mongodb");
    }).catch(error => {
      console.log("mongo error",error);
    })



module.exports.Place = require('./places')
module.exports.Comment = require('./comment')