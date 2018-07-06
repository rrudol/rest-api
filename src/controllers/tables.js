const router = require('express').Router({mergeParams: true});
const Table = require('../models/table');

// Tables

router.get('/', async (req, res) => {
  console.log({params: req.params});
  res.send( await Table.find({ restaurantId: req.params.restaurantId }, '').limit(req.query.limit).skip(req.skip).lean().exec() );
});

router.post('/', async (req, res) => {
  res.send(await (new Table({ restaurantId: req.params.restaurantId })).save());
});

// Table

router.get('/:tableId', async (req, res) => {
  res.send( await Table.find({ _id: req.params.tableId, restaurantId: req.params.restaurantId }, '') );
});

router.put('/:tableId', async (req, res) => {
  res.send( await Table.findOneAndUpdate( { _id: req.params.tableId, restaurantId: req.params.restaurantId }, {...req.body, restaurantId: req.params.restaurantId} ) );
});

router.delete('/:tableId', async (req, res) => {
  res.send( await Table.find({_id: req.params.tableId, restaurantId: req.params.restaurantId}).remove().exec() );
});

module.exports = router;