var express = require('express'),
	app 	= express();

app.get('/',function(req,res) {
	res.send('hello me');
    
});

app.listen(3000, function () {
	console.log('ReadyUp');
});