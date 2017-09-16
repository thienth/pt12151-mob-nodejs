var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'fpt polytechnic' });
});

router.get('/about', function(req, res, next) {
	var data = 100;
  res.render('about', {
  	text: data 
  });
});

router.get('/check-tam-giac/:canhA/:canhB/:canhC', 
		function(req, res, next) {
	var canhA = parseInt(req.params.canhA);
	var canhB = parseInt(req.params.canhB);
	var canhC = parseInt(req.params.canhC);
  res.render('baitap/ket-qua-tam-giac', {
  	canhA: canhA,
  	canhB: canhB,
  	canhC: canhC 
  });
});

module.exports = router;
