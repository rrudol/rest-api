const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;