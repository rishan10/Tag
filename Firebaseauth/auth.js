// import firebase from './firebase.js'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDpcllNutF9qbJ0mp91aEZSPHOjAtLJoAw",
    authDomain: "tag-app-3ea59.firebaseapp.com",
    databaseURL: "https://tag-app-3ea59.firebaseio.com",
    projectId: "tag-app-3ea59",
    storageBucket: "tag-app-3ea59.appspot.com",
    messagingSenderId: "501192940886"
  };
  var tagApp = firebase.initializeApp(config); //object for the app itself
  // console.log("App name: " + defaultApp.name)
  var user = firebase.auth().currentUser; //object for the current user, null if no user is logged into the app

//function used to create or sign up new users to the app, requires an email and password
//no checks on the email, so need to make sure it's valid when inputting
  function signup(email, password) {

  	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  	// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log("Error code: " + errorCode)
  		console.log("Error message: " + errorMessage)
  	// ...
	});

  }

// When the user clicks on signup button, after filling out the fields we get the fields for password, username
document.getElementById("signup").onclick = function(event) {
	pwd = document.getElementById("userPassword").value
	email = document.getElementById("userEmail").value

    console.log("User's email: " + email);
    console.log("User's password: " + pwd)

    // //Create a new user
    // var accountInstance = new AccountJS("https://tag-app-3ea59.firebaseio.com");

    // accountInstance.createUserWithEmail(eml, pwd, function(userData){
    //     //Handle user creation  
    //     firebase.database().ref('users/' + userId).set({
    //         email: eml,
    //       });
    // })
    signup(email, pwd)

}

