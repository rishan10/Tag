import React, { Component } from 'react';
import './css/style.css';
import $ from 'jquery';

class SignIn extends Component {

  componentDidMount() {
    $('.message a').click(function(){
       $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
  }

  render() {
    return (
      <div>
        <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input id= "userName" type="text" placeholder="name"/>
            <input id= "userPassword" type="password" placeholder="password"/>
            <input id="userEmail" type="text" placeholder="email address"/>
            <button type= "button" id= "signup">create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form className="login-form">
            <input id="signInEmail" type="text" placeholder="email"/>
            <input id= "signInPassword" type="password" placeholder="password"/>
            <button type= "button" id="signin">login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
        <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase.js"></script>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
      </div>
    );
  }
}

export default SignIn;