const mongoose = require('mongoose')

const db = process.env.MONGO || 'test'    
    
mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology:true,
      useCreateIndex: true
    }).then(()=>{
      console.log("conected to mongodb");
    }).catch(error => {
      console.log("mongo error",error);
    })


const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'http://placekitten.com/350/350'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'This is the future!']
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)