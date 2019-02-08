import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SignUpForm />
      </div>
    )
  }
}

export default Dashboard;
