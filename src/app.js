
//  required files and set up.

var express = require('express');
var fs = require('fs');
var app = express();

var bodyParser = require("body-parser")

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use('/', bodyParser())

// home route

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

// search route 

// searching data from the file 


function  searchUsers(users, inputData){
  var results = [];

  for (var i = 0; i < users.length; i++) {
    if (users[i].firstname === inputData || users[i].lastname === inputData ){
      results.push(users[i]);
    }
  }
  //  how can I pust the results

  return results;
}

//GET request
app.get('/search', function(request, response) {
  response.render ("search")
});




// post route
app.post('/search', function(request, response) {
  const userInput = request.body.name
  console.log('userInput')
  console.log(userInput)
  fs.readFile('users.json', function(err, data) {
    if (err) {
      throw err;
    }

    var parsedData = JSON.parse(data);
    var result =  searchUsers(parsedData, userInput);



    response.render("post", {
      matchedUsers: result
    });

  });
});





// add route
app.get('/addUser', function(request, response) {
  response.render("addUser");
});

// the final route
app.post('/addUser', function(request, response) {
  //code here

  const userInput1 = request.body.Firstname
  const userInput2 = request.body.lastname
  const userInput3 = request.body.emailadress
 
 var newUser = {
      firstname: userInput1,
      lastname : userInput2,
      email:userInput3
    }

 fs.readFile('users.json', function(err, data) {
    if (err) {
      throw err;
    }
    
    var parsedData = JSON.parse(data);



  parsedData.push(newUser);

    var newStringifiedJson = JSON.stringify(parsedData)


  fs.writeFile('users.json',newStringifiedJson, (error, data) => {
      if (error) {
        throw error;
      }
  
});


  });

//  not sure about this if have to parse th data be for stringify.
 


 response.redirect('/');
});


var server = app.listen(3000, function() {
  console.log('Example app listening on port: ' + server.address().port);
});



 //read the old json file and parse it
 //add the new user object to it
 //stringify the whole data set
 //write it to users.json

    // console.log("newUser")
    // console.log(newUser)

// how does this work with stringify

//   fs.writeFile('users.json', JSON.stringify(newUser), (error, data) => {
//       if (error) {
//         throw error;
//       }

// //  not sure about this if have to parse th data be for stringify.

//   var parsedData = JSON.parse(data);

//     });
//   }
 // }; 

  //end with this
 



/*  Part 1
Create two more routes:
- route 2: renders a page that displays a form which is your search bar.


- route 3: takes in the post request from your form, then displays matching users on a new page. Users should be matched based on whether either their first or last name contains the input string.

Part 2
Create two more routes:
- route 4: renders a page with three forms on it (first name, last name, and email) that allows you to add new users to the users.json file.
- route 5: takes in the post request from the 'create user' form, then adds the user to the users.json file. Once that is complete, redirects to the route that displays all your users (from part 0).







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




