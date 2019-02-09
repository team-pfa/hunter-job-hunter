import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <div className='flex-container v-flex'>
                <div>
                    <NavLink to='/' activeClassName='activeNav'><img src={this.props.avatar} id='avatar'></img></NavLink >
                </div>
                <div className="h-flex">
                    <div className='header-container' onClick={this.props.showPFAInfo}>
                        <NavLink to='/jobs' activeClassName='activeNav' id='about'>Jobs</NavLink >
                    </div>
                    <div className='header-container' onClick={this.props.showActivity}>
                        <NavLink to='/dashboard' activeClassName='activeNav' id='activity'>Dashboard</NavLink >
                    </div >
                    <div className='header-container' onClick={this.props.showUserInfo}>
                        <NavLink to='/resources' activeClassName='activeNav' id='username'>Resources</NavLink >
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Header;



