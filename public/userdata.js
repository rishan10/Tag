//gives back database information about the users as JSON
const preObject = document.getElementById('object');
const dbRefObject = firebase.database().ref().child('users');
dbRefObject.on('value', data => {
    console.log(preObject.innerText = JSON.stringify(data.val())) //gives back user data in JSON format
});
