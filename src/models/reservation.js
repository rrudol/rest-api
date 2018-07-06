const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  bill: Number,
  restaurantId: String,
  tableId: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;