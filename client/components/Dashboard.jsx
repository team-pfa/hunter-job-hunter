import React, { Component } from 'react';
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
