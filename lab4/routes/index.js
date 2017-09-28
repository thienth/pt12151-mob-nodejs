var express = require('express');
var router = express.Router();
var dbConnect = require('../db/connect.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	dbConnect.query("select * from category", 
        function (err, rows, fields) {
    if (err) throw err

    res.render('cate/index', { 
      title: 'Danh sách danh mục',
      data: rows
    });
  });
});

module.exports = router;
