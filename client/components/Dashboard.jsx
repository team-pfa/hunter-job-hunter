import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import JobCards from './JobCards';
import AddCard from './AddCard';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SignUpForm />
        <LoginForm/>
        <JobCards/>
        <AddCard/>
     </div>

    )
  }
}

export default Dashboard;
