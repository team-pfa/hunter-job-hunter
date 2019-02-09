import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import JobPostings from './components/JobPostings';
import Header from './components/Header';
import Resources from './components/Resources';
import Landing from './components/Landing';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'PICHICIEGO',
      avatar: "http://www.squishable.com/mm5/graphics/00000001/opensquish_pink_fairy_armadillo_303018_design.jpg"
    }
  }

  render() {
    return (
      <Router history={history}>
        <div className="main-container v-flex">
          <Header
            username={this.state.user}
            avatar={this.state.avatar}
          />
          <Route exact path="/" component={Landing} />
          <Route path="/jobs" component={JobPostings} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/resources" component={Resources} />
        </div>
      </Router>
    )
  }
}

export default App;
