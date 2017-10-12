var fs = require('fs');
var fileName = "data.json";
// fs.readFile(fileName, 'utf-8', function(err, data){
// 	if(err) throw err;
// 	console.log(data);
// });
console.log('reading ....');
var data = fs.readFileSync(fileName, 'utf-8');
data = JSON.parse(data);
console.log(data[0]);