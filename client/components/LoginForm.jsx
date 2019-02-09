import React, { Component } from 'react';

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
          <div>
              username :
             <input type = "text" name = "username" value = {this.state.username} 
                onChange = {this.updateState} /> <br/>
              password :
             <input type = "text" name = "password" value = {this.state.password}
                onChange = {this.updateState} /> <br/>
            <button onClick={this.submitState}> submit </button>
          </div>
       );
    }
 }
 export default LoginForm;