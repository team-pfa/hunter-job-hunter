import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'PICHICIEGO',
      avatar: "http://www.squishable.com/mm5/graphics/00000001/opensquish_pink_fairy_armadillo_303018_design.jpg" 
    }
    this.showUserInfo = this.showUserInfo.bind(this)
    this.showPFAInfo = this.showPFAInfo.bind(this)
    this.showActivity = this.showActivity.bind(this)

  }

  showUserInfo() {
    alert('clicked on USER_INFO button')
  }

  showPFAInfo() {
    alert('clicked on ABOUT button')
  }

  showActivity() {
    alert('clicked on ACTIVITY button')
  }

  render() {
    return (
      <div>
        {/* <Dashboard /> */}
        <Header showUserInfo={this.showUserInfo} 
                showPFAInfo={this.showPFAInfo} 
                showActivity={this.showActivity} 
                username={this.state.user} 
                avatar={this.state.avatar} />

        <Dashboard />

        <div>
          <Form myDataProp ={this.state.data}/>
        </div>


      </div>
    )
  }
}

export default App;
