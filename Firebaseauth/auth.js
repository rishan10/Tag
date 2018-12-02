


// When the user clicks on signup, we get the fields for password, username
document.getElementById("signup").onclick = function(event) {
	pwd = document.getElementById("userPassword").value;
	console.log(document.getElementById("userEmail").value)

    // console.log("User's email: " + email);
    console.log("User's password: " + pwd);
}