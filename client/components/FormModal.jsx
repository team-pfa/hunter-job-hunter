import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

class FormModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signup: false,
    }

    this.toggleForms = this.toggleForms.bind(this);
  }

  toggleForms() {
    this.setState({
      signup: !this.state.signup
    })
  }

  render() {
    if (this.state.signup) {
      return (
        <LoginForm toggleForms={this.toggleForms} toggleModal={this.props.toggleModal} />
      )
    } else {
      return (
        <SignUpForm toggleForms={this.toggleForms} toggleModal={this.props.toggleModal} />
      )
    }
  }
}

export default FormModal;
