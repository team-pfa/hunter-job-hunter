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

  componentDidMount() {
    if (window.sessionStorage.getItem('Authorized') == 'true') {
      this.setState({
        showModal: !this.state.showModal
      })
    }
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    if (this.state.showModal) {
      return (
        <div className="dashboard-container">
          <FormModal toggleModal={this.toggleModal} />
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
