var cloudinary = require('cloudinary');
var express = require('express');

cloudinary.config({
	cloud_name : 'drkkz1r25',
	api_key : '682448935966818',
	api_secret : 'KSgt4lARCiswcW8GnRlc1v0XHAU'
});

var app = express();

app.get('/upload',function (req, res) {
	var name = req.imagename;
	console.log(name);
	cloudinary.uploader.upload("abc.jpg", function (result) {
		console.log(result.result_id);
		res.send(result.public_id);
	});
});

app.get('/display', function (req, res) {
	console.log('I am trying to display an image');

});

app.listen(3000, function () {
	console.log('Listening to port 3000');
});

