
//  required files

var express = require('express');
var fs = require('fs');
var app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', function(request, response) {
  fs.readFile('users.json', function(err, data) {
    if (err) {
      console.log(err);
    }

    var parsedData = JSON.parse(data);
    console.log(parsedData);
    response.render("index", {
      users: parsedData
    });
  });
});

var server = app.listen(3000, function() {
  console.log('Example app listening on port: ' + server.address().port);
});







	 /* for (var i = 0; i < data.length; i++) {

		if (data[i].name == process.argv[2]) {
			console.log("Country:" + data[i].name + " "+ "Top Level Domain:" + data[i].topLevelDomain)
		}

	} 
});



// writting to the jasone file


fs.writeFile("./users.json",userInfo, function(err){

	if(err){
		console.log("there was a problem writting you file: ${err}");

		throw err;
	}

	console.log("your information saved.");

});




//  port 


const listener = app.listen(3000, () => {
    console.log('server has started at ', listener.address().port)
})
  */



