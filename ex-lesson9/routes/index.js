var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	// Doc du lieu tu post.json va user.json
	// sau do hien thi o trang chu
	var user = fs.readFileSync(`${__dirname}/../data/user.json`, 'utf-8');
	user = JSON.parse(user);
	var post = fs.readFileSync(`${__dirname}/../data/post.json`, 'utf-8');
	post = JSON.parse(post);

  res.render('index', { title: 'Express', user: user, post: post });
});

module.exports = router;
