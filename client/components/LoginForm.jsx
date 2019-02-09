import React, { Component } from 'react';
import '../css/LoginForm.css';

class LoginForm extends Component {
    constructor(props) {
       super(props);

       this.state = {
          username: '',
          password: '',
       }
       this.updateState = this.updateState.bind(this);
       this.submitState = this.submitState.bind(this);
    };
    updateState(event) {
        const input = {
            [event.target.name]: event.target.value
        }
       this.setState(input);
       //console.log(this.state);
    }

    submitState() {
      if ( this.state.username === '' || this.state.password === ''){
         alert("Must fill username AND password")
      } else {
       let data = this.state

       fetch('/signin', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
       })
         .then(res => {
            if (res.redirected === true) {
               console.log('redirected!');
            }
         });
      }
    }

    render() {
       return (
          <div className="login-form-container v-flex">
             <p>User Name:</p>
             <input type="text" name="username" placeholder="User Name (Required)" value={this.state.username}
                onChange={this.updateState} />
             <p>Password:</p>
             <input type="text" name="password" placeholder="Password (Required)" value={this.state.password}
                onChange={this.updateState} />
            <button onClick={this.submitState}>Login</button>
            <button onClick={this.props.toggleForms}>Sign Up</button>
          </div>
       );
    }
 }
 export default LoginForm;
