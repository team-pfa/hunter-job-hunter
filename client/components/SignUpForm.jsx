import React, {  Component } from 'react';
import '../css/SignUpForm.css';

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const input = {
      [e.target.name]: e.target.value
    }
    this.setState(input);
  }

  handleSubmit() {
    const { userName, password, email } = this.state;
    if (userName === '' || password === '' || email === '') {
      alert('User name, password, or email field cannot be empty')
    } else {
      const data = this.state;

      fetch('/signup', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then((res) => {
          console.log(res);
      })

      this.setState({
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
      })
    }
  }

  render() {
    return (
      <div>
        <div className="signup-form-container v-flex">
          <p>User Name:</p>
          <input type="text" name="userName" placeholder="User Name (Required)" value={this.state.userName} onChange={this.handleChange} />
          <p>Password:</p>
          <input type="text" name="password" placeholder="Password (Required)" value={this.state.password} onChange={this.handleChange} />
          <p>Email:</p>
          <input type="text" name="email" placeholder="Email (Required)" value={this.state.email} onChange={this.handleChange} />
          <p>First Name:</p>
          <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
          <p>Last Name:</p>
          <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default SignUpForm;
