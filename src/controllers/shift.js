const router = require('express').Router({mergeParams: true});
const Table = require('../models/table');
const Reservation = require('../models/reservation');

router.post('/:targetId', async (req, res) => {
  await Reservation.updateMany({ tableId: req.params.tableId }, [], { tableId: req.params.targetId } );
  res.sendStatus( 200 );
});

module.exports = router;