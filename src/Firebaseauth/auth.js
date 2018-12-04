//https://firebase.google.com/docs/auth/web/manage-users?authuser=0
//use this link for reference on how to update and read user info

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
  
  //function that specifies what to after a user has been created and logged in, or logs back in
  //maybe takes the user into the app?
  function proceed(name, code=3) {
  	switch(code) {
  		case 0:
  			console.log(name + " was successfully created and logged in!")
  			window.alert(name + " was successfully created and logged in!")
  			break;
  		case 1:
  			console.log(name + " was successfully logged in!")
  			window.alert(name + " was successfully logged in!")
  			break;
  		default:
  			console.log("no code provided")

  	}
  	return code;
  }
//function used to create or sign up new users to the app, requires an email and password
//no checks on the email, so need to make sure it's valid when inputting
  function signup(name, email, password) {

  	firebase.auth().createUserWithEmailAndPassword(email, password).then(function(credential){
  		console.log(name + "being added...")
  		// while(!user) {
  		// 	//this needs to be fixed!!
  		// }

  		if(user != null) {
			user.displayName = name
  		}
  		proceed(name, 0);
  	}).catch(function(error) {
  	// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log("Error code: " + errorCode)
  		console.log("Error message: " + errorMessage)
  		window.alert("Error logging in: " + errorMessage)

  	// ...
	});

  }

 //function used to sign in already existing users in the database
 //again this requires email and password but there are no checks to ensure that email is formatted well
 function signin(email, password,name="noname") {
 	firebase.auth().signInWithEmailAndPassword(email, password).then(function(credential){
 		if(user != null) {
			name = user.displayName
 		}
 		
 		proceed(name, 1)
 	}).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log("Error code: " + errorCode)
  		console.log("Error message: " + errorMessage)
  		window.alert("Sign-in failed: " + errorMessage)
  		// ...
	});
 }

// When the user clicks on signup button, after filling out the fields we get the fields for password, username
document.getElementById("signup").onclick = function(event) {
	pwd = document.getElementById("userPassword").value
	email = document.getElementById("userEmail").value
	name = document.getElementById("userName").value

    signup(name, email, pwd)

}

// When the user clicks on sign in button, after filling out the fields we get the fields for password, username
document.getElementById("signin").onclick = function(event) {
	pwd = document.getElementById("signInPassword").value
	email = document.getElementById("signInEmail").value
	// name = document.getElementById("userName").value

    signin(email, pwd)

}

//use this function to sign out the user, this assumes that we have a signout button and have implemented it's functionality
// document.getElementById("signout").onclick = function(event) {
// 	// Sign out user
// 	firebase.auth().signOut().then(function (credential) {
// 		//user successfully signed out
// 	}).catch(function (err) {
// 	   // Handle errors
// 	});

// }

// firebase.auth().onAuthStateChanged(function(user) {
// 	if(user) {
// 		//user is currently signed in
// 	}else{
// 		//user is not signed in
// 	}
 	
// });






