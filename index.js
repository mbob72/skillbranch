const express = require('express');
const app = express();

app.get('/', function(req, res) {

	var param = req.query;

	var a = +param.a || 0;
	var b = +param.b || 0;

	var result = a + b;

	res.end(result.toString());

})

app.listen(3000, function() {
	console.log('server start');
})
