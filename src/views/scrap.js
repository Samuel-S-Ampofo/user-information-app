
//  wrting to file  function

// var obj = { "name":"John", "today":new Date(), "city":"New York"};
// var myJSON = JSON.stringify(obj);

 // tranfered data into objects 

 

  const userInput1 = request.body.Firstname
  const userInput2 = request.body.lastname
  const userInput3 = request.body.emailadress
 
    var newUser = {
      "firstname": "userInput1",
      "lastname" : "userInput2",
      "email":"userInput3"
    }

    // console.log("newUser")
    // console.log(newUser)

// how does this work with stringify

  



//  funtion mehtod - how do I use my function


  function addUser(oldParsedJsonData,newUserObject) {
    oldParsedJsonData.push(newUserObject);

    var newStringifiedJson = oldParsedJsonData.stringify()

    return newStringifiedJson
  }


  addUser( )

fs.writeFile('users.json', newStringifiedJson , (error, data) => {
      if (error) {
        throw error;
      }

//  not sure about this if have to parse th data be for stringify.

}; 






 addUser(parsedData,newUser) {
    users.push(userObject);

    fs.writeFile('users.json', JSON.stringify(users), (error, data) => {
      if (error) {
        throw error;
      }
    });
  }
};




    var parsedData = JSON.parse(data);
    var result =  searchUsers(parsedData, userInput);

addUser(userObject,users) {
    users.push(userObject);


  //end with this
  response.redirect('/');









var fs = require("fs");

  var myContenet = " what the helo are you waiting for you go to do something.";

  fs.writeFile("users.jason",myContenet, function(err){

    if(err){
      console.log("there was a problem writting you file: ${err}");

      throw err;
    }

    console.log("content written.");

  }); 







// route to serach page.


fs.readFile('user.json', function(err, data) {
      if (err) {

        console.log(err);
      }

      var parsedData = JSON.parse(data);

    for (var i = 0; i < data.length; i++) {

      if (data[i].firstname || data[i].lastname == somehting bodyparsed data) {   // == post data for search query  pass that data to the result page and render//
        console.log(data[i]) 
    }

  }
}

    console.log(parsedData); // push data to the search page.




    response.render("post", {
      users: parsedData
    });
});






// post
app.get('/post', function(request, response) {
  fs.readFile('user.json', function(err, data) {
      if (err) {

        console.log(err);
      }

      var parsedData = JSON.parse(data);

      for (var i = 0; i < data.length; i++) {

      if (data[i].firstname || data[i].lastname == process.argv[2]) { // == post data for search query  pass that data to the result page and render//
        console.log(data[i]) 
      }

    }

    console.log(parsedData); // push data to the search page.
   response.render("post", {
      users: parsedData
    });
});



// search  fucntions 

app.get('/search',function(request, response) {

    response.render("search");
});






//  route to add page

app.get('/', function(request, response) {
  fs.readFile('add', function(err, data) {
    if (err) {
      console.log(err);
    }

    var parsedData = JSON.parse(data);
    console.log(parsedData);
    response.render("add", {
      users: parsedData
    });
  });
});



// post  fucntions 

app.get('/post', function(request, response) {
  fs.readFile('user.json', function(err, data) {
      if (err) {

        console.log(err);
      }

      var parsedData = JSON.parse(data);

    for (var i = 0; i < data.length; i++) {

      if (data[i].firstname || data[i].lastname == process.argv[2]) {   // == post data for search query  pass that data to the result page and render//
        console.log(data[i]) 
      }

    }

    console.log(parsedData); // push data to the search page.




    response.render("post", {
      users: parsedData
    });
});


