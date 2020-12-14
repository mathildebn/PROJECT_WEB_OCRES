var express = require("express");
var router = express.Router();

var calRoute = require('./calendar');

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("BDD");
});



module.exports = router;

