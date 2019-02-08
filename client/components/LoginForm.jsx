import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
       super(props);
       
       this.state = {
          name: '',
          password: '',
       }
       this.updateState = this.updateState.bind(this);
       this.submitState = this.submitState.bind(this);
    };
    updateState(event) {
        const input = {
            [event.target.name]: event.target.value,
        }
       this.setState(input);
       //console.log(this.state);
    }

    submitState() {
       let data = this.state
       fetch('/signin', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
       })
       then(response => response.json());
    }
   
    render() {
       return (
          <div>
              username :
             <input type = "text" name = "name" value = {this.state.name} 
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