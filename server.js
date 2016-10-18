var express = require('express'),
	app 	= express();
	messagebird = require('messagebird')('live_FyFTz0kVi5aVUJaagMA0vBGmB');

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));


 app.get('/',function(req,res) {
   messagebird.balance.read(function (err, response) {
  if (err) {
   console.log(err);
  } else
       // res.render({balance:response.amount, type:response.type});
       res.render('index', {
       	balance:response.amount, type:response.type
       });
    });   
 });



app.listen(3000, function () {
	console.log('ReadyUp');
});