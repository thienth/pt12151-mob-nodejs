var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// Doc du lieu tu post.json va user.json
	// sau do hien thi o trang chu
	
  res.render('index', { title: 'Express' });
});

module.exports = router;
