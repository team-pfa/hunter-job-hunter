import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Dashboard />

        <div>
          <Form myDataProp ={this.state.data}/>
        </div>


      </div>
    )
  }
}

export default App;
