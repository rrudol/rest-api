const router = require('express').Router();
const Table = require('../models/table');

router.post('/:targetId', async (req, res) => {
  const sourceTable = await Table.findById(req.params.tableId);
  const targetTable = await Table.findById(req.params.targetId);
  res.send(  );
});

module.exports = router;