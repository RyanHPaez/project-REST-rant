// making stub routes
const router = require('express').Router()



// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/coffee-cat.jpg'
  }]
     res.render('places/index', { places })
  })

  router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.get('/:id', (req,res) => {
    let myId = req.params.id;
    res.send('Details for ${myId}');
  })


module.exports = router