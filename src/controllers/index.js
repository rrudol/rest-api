const router = require('express').Router();
const restaurants = require('./restaurants');
const tables = require('./tables');
const reservations = require('./reservations');
const shift = require('./shift');

router.use('/restaurants', restaurants);
router.use('/restaurants/:restaurantId/table', tables);
router.use('/restaurants/:restaurantId/table/:tableId/shift', shift);
router.use('/restaurants/:restaurantId/table/:tableId/reservations', reservations);

module.exports = router;