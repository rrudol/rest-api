const router = require('express').Router({mergeParams: true});
const Reservation = require('../models/reservation');

// Reservations

router.get('/', async (req, res) => {
  res.send( await Reservation.find({}, '').limit(req.query.limit).skip(req.skip).lean().exec() );
});

router.post('/', async (req, res) => {
  res.send(await (new Reservation({})).save());
});

// Reservation

router.get('/:reservationId', async (req, res) => {
  res.send( await Reservation.find({ _id: req.params.reservationId, tableId: req.params.tableId, restaurantId: req.params.restaurantId }, '') );
});

router.put('/:reservationId', async (req, res) => {
  res.send( await Reservation.findByIdAndUpdate( req.params.reservationId, req.body ) );
});

router.delete('/:reservationId', async (req, res) => {
  res.send( await Reservation.findByIdAndDelete( req.params.reservationId ) );
});

module.exports = router;