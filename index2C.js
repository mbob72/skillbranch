const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
 
app.get('/', function(req, res) {

	function showError() {
		res.end('Invalid username');
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

	var un = req.query.username;

	if (!un) {
		showError();
		return
	}
	var reg1 = /[\/]{1,2}/;
	var reg2 = /[?#]/;

	var urlSplit = req.query.username.split(reg1)

	var urlWithParam = urlSplit[(urlSplit.length - 1)];

	var result = urlWithParam.split(reg2)[0];

	console.dir(urlWithParam.split(reg2));

	res.end( result[0] === '@' ? result : '@' + result);

	return

})

app.listen(3010, function() {
	console.log('server start, cors enabled');
})
