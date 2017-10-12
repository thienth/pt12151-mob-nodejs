var fs = require('fs');
var fileName = "data.json";
var data = [
	{
		name: "Lê Văn Học",
		score: 9.5
	},
	{
		name: "Lê Bác Học",
		score: 9.0
	},
	{
		name: "Lê Cháu Học",
		score: 0.9
	}
];
data = JSON.stringify(data);
fs.writeFile(fileName, data, 'utf-8', 
	function(err, result){
		if(err) throw err;
		console.log(result);
});