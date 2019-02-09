import React, { Component } from 'react';
import '../css/JobPostings.css';

class JobPostings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: 'Software Engineer',
      location: 'New York',
      dataLoaded: false,
      apiData: null,
    }

    this.getGitHubJobPostings = this.getGitHubJobPostings.bind(this);
  }

  componentDidMount() {
    this.getGitHubJobPostings()
  }

  getGitHubJobPostings() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const description = this.state.description.split(' ').join('+')
    const location = this.state.location.split(' ').join('+')
    const url = `${proxy}https://jobs.github.com/positions.json?description=${description}&location=${location}`

    fetch(url, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(apiData => apiData.json())
      .then((apiData) => {
        this.setState({
          apiData,
          dataLoaded: true
        })
      }
    );
  }

  render() {
    if (this.state.dataLoaded) {

      const jobCardArr = [];

      this.state.apiData.forEach((posting, i) => {
        jobCardArr.push(
          <div key={i}>
            <p>{posting.title}</p>
            <p>{posting.location}</p>
            <p>{posting.created_at}</p>
            <a href={posting.url}>Link</a>
          </div>
        )
      })

      return (
        <div className="job-posting-container v-flex">
          {jobCardArr}
        </div>
      )
    } else {
      return (
        <h1>Loading Data</h1>
      )
    }
  }
}

export default JobPostings;
