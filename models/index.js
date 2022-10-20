require('dotenv').config()
const mongoose = require('mongoose')
  

    
mongoose.connect('process.env.MONGO_URI', {
      useNewUrlParser: true,
      useUnifiedTopology:true,
    
    }).then(()=>{
      console.log("conected to mongodb");
    }).catch(error => {
      console.log("mongo error",error);
    })



module.exports.Place = require('./places')
module.exports.Comment = require('./comment')