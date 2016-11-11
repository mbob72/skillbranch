const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
 
app.get('/', function(req, res) {

	function showError() {
		res.end('Invalid fullname');
	}

	function getFirstChar(word) {
		return word[0].toUpperCase() + '.';
	}

	function fullToShort(resArr) {
		if (resArr.length == 1) return;

		if (resArr.length == 2) {
			resArr.reverse();
			resArr[1] = getFirstChar(resArr[1]);
		}

		if (resArr.length == 3) {
			resArr.splice(0, 0, resArr.pop())
			resArr[1] = getFirstChar(resArr[1]);
			resArr[2] = getFirstChar(resArr[2]);
		}
	}

	var fn = req.query.fullname;

	if (!fn) {
		showError();
		return
	}

	var resArr = fn.split(' ');

	if (resArr.length > 3) {
		showError()
		return
	}

	fullToShort(resArr);

	res.end(resArr.join(' '));

	return

})

app.listen(3000, function() {
	console.log('server start, cors enabled');
})
