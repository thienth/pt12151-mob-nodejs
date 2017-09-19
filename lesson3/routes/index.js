var express = require('express');
var router = express.Router();
var dbConnect = require('../db/connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  dbConnect.query("select * from products", 
        function (err, rows, fields) {
    if (err) throw err

    res.render('index', { 
      title: 'Danh sách sản phẩm',
      data: rows
    });
  });
});

module.exports = router;
