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

router.get('/remove-product/:userId', function(req, res, next) {
  // console.log(req.params.userId);
  dbConnect.query(`delete from products where id = ${req.params.userId}`, 
        function (err, rows, fields) {
    if (err) throw err

    res.redirect('/');
  });
});

router.get('/create-product', function(req, res, next) {

  res.render('add-product');
});

router.post('/save-product', function(req, res, next) {
  var sql = `insert into products (name, price, detail)
              values ('${req.body.name}', ${req.body.price}, '${req.body.detail}')`;
  dbConnect.query( sql, 
        function (err, rows, fields) {
    if (err) throw err

    res.redirect('/');
  });
  
});

module.exports = router;
