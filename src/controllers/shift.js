const router = require("express").Router({ mergeParams: true });
const Table = require("../models/table");
const Reservation = require("../models/reservation");

router.post("/:targetId", async (req, res) => {
  const { tableId, targetId } = req.params;
  Reservation.update({ tableId }, { $set: { tableId: targetId } }, () => {
    res.send({ state: 200 });
  });
});

module.exports = router;
