var express = require('express'),
	app 	= express();


app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res) {
	// res.send('index.html');
	res.render('index');

    
});


app.listen(3000, function () {
	console.log('ReadyUp');
});