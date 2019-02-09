import React, { Component } from 'react';
import '../css/Header.css';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <div class='flex-container'>
                <div class='header-container' onClick={this.props.showPFAInfo}>
                    <p id='about'>ABOUT</p>
                </div>
                <div class='header-container' onClick={this.props.showActivity}>
                    <p id='activity'>ACTIVITY</p>
                </div >
                <div class='header-container' onClick={this.props.showUserInfo}>
                    <p id='username'>{this.props.username}</p>
                </div>
                <div>
                    <img src={this.props.avatar} id='avatar'></img>
                </div>
            </div>
        </div>
    )
  }
}

export default Header;



