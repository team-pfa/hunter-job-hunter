import React, { Component } from 'react';
import LoginForm from './LoginForm';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
       <LoginForm/>
     </div>
    )
  }
}

export default Dashboard;
