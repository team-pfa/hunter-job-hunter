import React, { Component } from 'react';
import AddCard from './AddCard';
import JobCards from './JobCards';
import '../css/JobPostings.css';

class JobApplied extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="job-posting-container v-flex">
        <AddCard />
        <JobCards />
      </div>
    )
  }
}

export default JobApplied;
