const express = require("express");
const index = require("./controllers/index");
const bodyParser = require("body-parser");
// const cors = require('cors');
const db = require("./database");
const paginate = require("express-paginate");
const preconditions = require("express-preconditions");

const app = express();
// app.use(cors( {origin: 'http://localhost:4000'} ));

app.set("etag", "strong");
app.use(preconditions());
app.use(paginate.middleware(10, 50));
app.use(bodyParser.json({ type: "application/json" }));

app.use("/", index);

module.exports = app;
