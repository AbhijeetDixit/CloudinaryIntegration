var cloudinary = require('cloudinary');
var express = require('express');

cloudinary.config({
	cloud_name : 'drkkz1r25',
	api_key : '682448935966818',
	api_secret : 'KSgt4lARCiswcW8GnRlc1v0XHAU'
});

var app = express();
app.set('view engine', 'ejs');

app.get('/',function (req, res) {
	res.render('pages/index');
});

app.post('/upload',function (req, res) {
	//var name = req.body.imagepath;
	//console.log(name);
	cloudinary.uploader.upload('./public/images/abc.jpg', function (result) {
		console.log(result.result_id);
		res.send(result.public_id);
	});
});

app.post('/uploadwithid',function (req, res) {
	//var name = req.body.imagepath;
	//var id = req.body.public_id;
	cloudinary.uploader.upload('./public/images/abc.jpg', function (result) {
		res.send(result);
	}, {public_id : 'sample_image'});
})

app.get('/display', function (req, res) {
	console.log('I am trying to display an image');
	res.render('pages/showimage');

});

app.listen(3000, function () {
	console.log('Listening to port 3000');
});

