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

router.get('/update-product/:userId', function(req, res, next) {
  // console.log(req.params.userId);
  dbConnect.query(`select * from products where id = ${req.params.userId}`, 
        function (err, rows, fields) {
    if (err) throw err

    res.render('edit-product', {model: rows[0]});
  });
});

router.get('/create-product', function(req, res, next) {

  res.render('add-product');
});

router.post('/save-product', function(req, res, next) {
  if(req.body.id != null){
    var sql = `update products 
                set name = '${req.body.name}', 
                    price = ${req.body.price}, 
                    detail = '${req.body.detail}'
                where id = '${req.body.id}'`;
  
  }else{
    var sql = `insert into products 
              (name, price, detail)
              values ('${req.body.name}', 
                      ${req.body.price}, 
                      '${req.body.detail}')`;
  
  }
  dbConnect.query( sql, 
        function (err, rows, fields) {
    if (err) throw err

    res.redirect('/');
  });
  
});

module.exports = router;
