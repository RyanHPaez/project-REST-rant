require('dotenv').config()
const mongoose = require('mongoose')

// const db = process.env.MONGO || 'test'    
    
// mongoose.connect(db, {
//       useNewUrlParser: true,
//       useUnifiedTopology:true,
//       useCreateIndex: true
//     }).then(()=>{
//       console.log("conected to mongodb");
//     }).catch(error => {
//       console.log("mongo error",error);
//     })

mongoose.connect(process.env.MONGODB_URI.DB, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,

})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')