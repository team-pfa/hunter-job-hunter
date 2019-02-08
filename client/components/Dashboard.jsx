import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SignUpForm />
        <LoginForm/>
     </div>

    )
  }
}

export default Dashboard;
