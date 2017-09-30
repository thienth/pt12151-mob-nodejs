// setInterval(function (){
// 	console.log('foo');
// 	logText('nodejs practice');
// }, 1000);

// function logText(txt){
// 	console.log(txt);
// }

// var fs = require('fs');
// fs.readFile("", "utf8", function(err, rs){
// 	if(err){
// 		throw err;
// 	}
// 	var data = JSON.parse(rs);
// 	console.log(data.name);
// });

// console.log("reading file.....");

// process.on('uncaughtException', function(err){
// 	console.log(err);
// });

/*var async = require('async');
async.series([
	function(callback){
		setTimeout(function(){
			console.log('timeout 0');
			callback(null, 1);
		}, 2000);
	},
	function(callback){
		setTimeout(function(){
			console.log('timeout 1');
			callback(null, 2);
		}, 1000);
	},
	function(callback){
		setTimeout(function(){
			console.log('timeout 2');
			callback(null, 3);
		}, 500);
	},
	function(callback){
		setTimeout(function(){
			console.log('timeout 3');
			callback(null, 4);
		}, 300);
	},
	function(callback){
		setTimeout(function(){
			console.log('timeout 4');
			callback(null, 5);
		}, 200);
	},
], function(err, rs){
	console.log(rs);
});

*/

var arr = [];
console.log(arr);
arr.push(1);
arr.push(2);
arr.push(5);
console.log(arr);
arr.push(10);
console.log(arr);

console.log(arr.shift());
console.log('shift done!');
console.log(arr);




















