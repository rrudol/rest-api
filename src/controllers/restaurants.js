const router = require('express').Router();
const Restaurant = require('../models/restaurant');

// Restaurants

router.get('/', async (req, res) => {
  res.send( await Restaurant.find({}, '').limit(req.query.limit).skip(req.skip).lean().exec() );
});

router.post('/', async (req, res) => {
  res.send(await (new Restaurant()).save());
});

// Restaurant

router.get('/:restaurantId', async (req, res) => {
  res.send( await Restaurant.findById(req.params.restaurantId) );
});

router.put('/:restaurantId', async (req, res) => {
  res.send( await Restaurant.findByIdAndUpdate( req.params.restaurantId, req.body ) );
});

router.delete('/:restaurantId', async (req, res) => {
  res.send( await Restaurant.findByIdAndDelete( req.params.restaurantId ) );
});

module.exports = router;