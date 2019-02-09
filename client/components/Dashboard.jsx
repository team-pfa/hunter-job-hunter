import React, { Component } from 'react';

import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import JobCards from './JobCards';
import AddCard from './AddCard';
import '../css/Dashboard.css';
import FormModal from './FormModal';
import JobApplied from './JobApplied';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    }

    this.toggleModal = this.toggleModal.bind(this);
  }


//   render() {
//     return (
//       <div>
//         <SignUpForm />
//         <LoginForm/>
//         <JobCards/>
//         <AddCard/>
//      </div>

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    if (this.state.showModal) {
      return (
        <div className="dashboard-container">
          <FormModal />
        </div>
      )
    } else {
      return (
        <div>
          <JobApplied toggleModal={this.toggleModal} />
        </div>
      )
    }
  }
}

export default Dashboard;
