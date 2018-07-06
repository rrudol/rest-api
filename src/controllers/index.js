const router = require('express').Router();
const restaurants = require('./restaurants');
const tables = require('./tables');
const reservations = require('./reservations');
const shift = require('./shift');

router.use('/restaurants', restaurants);
router.use('/restaurants/:restaurantId/tables', tables);
router.use('/restaurants/:restaurantId/tables/:tableId/shift', shift);
router.use('/restaurants/:restaurantId/tables/:tableId/reservations', reservations);

module.exports = router;