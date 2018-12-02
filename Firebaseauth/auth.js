import firebase from './firebase.js'

// When the user clicks on signup, we get the fields for password, username
document.getElementById("signup").onclick = function(event) {
	pwd = document.getElementById("userPassword").value;
	console.log(document.getElementById("userEmail").value)

    // console.log("User's email: " + email);
    console.log("User's password: " + pwd);

    //Create a new user
    var accountInstance = new AccountJS("https://tag-app-3ea59.firebaseio.com");

    accountInstance.createUserWithEmail(eml, pwd, function(userData){
        //Handle user creation  
        firebase.database().ref('users/' + userId).set({
            email: eml,
          });
    })

}