var cloudinary = require('cloudinary');
var express = require('express');
var bodyparser = require('body-parser');

cloudinary.config({
	cloud_name : 'drkkz1r25',
	api_key : '682448935966818',
	api_secret : 'KSgt4lARCiswcW8GnRlc1v0XHAU'
});

var app = express();
app.set('view engine', 'ejs');
app.use( express.static('public'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get('/',function (req, res) {
	res.render('pages/index');
});

app.post('/uploadimage',function (req, res) {
	var name = req.body.imagepath;
	console.log(name);
	cloudinary.uploader.upload(name, function (result) {
		console.log(result.result_id);
		res.send(result.public_id);
	});
});

app.post('/uploadimagewithid',function (req, res) {
	var name = req.body.imagepath;
	var id = req.body.public_id;
	cloudinary.uploader.upload(name, function (result) {
		res.send(result);
	}, {public_id : id});
});

app.post('/uploadvideo',function (req, res) {
	var name = req.body.imagepath;
	console.log(name);
	cloudinary.uploader.upload(name, function (result) {
		console.log(result.result_id);
		res.send(result.public_id);
	}, {resource_type:"video"});
});

app.post('/uploadvideowithid',function (req, res) {
	var name = req.body.imagepath;
	var id = req.body.public_id;
	cloudinary.uploader.upload(name, function (result) {
		res.send(result);
	}, {resource_type:"video", public_id : id});
});

app.get('/display', function (req, res) {
	res.render('pages/showimage');
});

app.listen(3000, function () {
	console.log('Listening to port 3000');
});

