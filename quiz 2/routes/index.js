var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/info", function (req, res, next) {
  res.render("info", { info });
});

module.exports = router;
