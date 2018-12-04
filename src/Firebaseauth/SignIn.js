import React, { Component } from 'react';
import './css/style.css';

class SignIn extends Component {

  render() {
    return (
      <div>
        <div class="login-page">
        <div class="form">
          <form class="register-form">
            <input id= "userName" type="text" placeholder="name"/>
            <input id= "userPassword" type="password" placeholder="password"/>
            <input id="userEmail" type="text" placeholder="email address"/>
            <button id= "signup">create</button>
            <p class="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form class="login-form">
            <input id="signInEmail" type="text" placeholder="email"/>
            <input id= "signInPassword" type="password" placeholder="password"/>
            <button id="signin">login</button>
            <p class="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
        <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase.js"></script>
        <script src="auth.js">
        </script>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

        

          <script  src="Firebaseauth/js/index.js"></script>
      </div>
    );
  }
}

export default SignIn;