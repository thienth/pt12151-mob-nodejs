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
router.get('/add-category', function(req, res, next) {

    res.render('cate/add', { 
      title: 'Danh sách danh mục'
    });
});
router.post('/save-add-category', function(req, res, next) {
	var sql = "insert into category (name, `desc`) values ";
		sql += "('"+req.body.name+"', '"+req.body.desc+"')";
				
    dbConnect.query(sql, 
        function (err, rows, fields) {
	    if (err) throw err

	    res.redirect('/');
  	});
});

module.exports = router;
