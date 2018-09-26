const router = require("express").Router({ mergeParams: true });
const Reservation = require("../models/reservation");

// Reservations

router.get("/", async (req, res) => {
  res.send(
    await Reservation.find(
      {
        restaurantId: req.params.restaurantId,
        tableId: req.params.tableId
      },
      ""
    )
      .limit(req.query.limit)
      .skip(req.skip)
      .lean()
      .exec()
  );
});

router.post("/", async (req, res) => {
  res.send(
    await new Reservation({
      restaurantId: req.params.restaurantId,
      tableId: req.params.tableId
    }).save()
  );
});

// Reservation

router.get("/:reservationId", async (req, res) => {
  res.send(
    await Reservation.find(
      {
        _id: req.params.reservationId,
        tableId: req.params.tableId,
        restaurantId: req.params.restaurantId
      },
      ""
    )
  );
});

router.put("/:reservationId", async (req, res) => {
  await Reservation.findByIdAndUpdate(req.params.reservationId, req.body);
  res.send({ status: 200 });
});

router.delete("/:reservationId", async (req, res) => {
  res.send(await Reservation.findByIdAndDelete(req.params.reservationId));
});

module.exports = router;
