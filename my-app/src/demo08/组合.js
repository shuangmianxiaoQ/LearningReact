import React, { Component } from 'react';
import './组合.css';

class FancyBorder extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

class Dialog extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <FancyBorder color='red'>
        <h1>
          {this.props.title}
        </h1>
        <p>
          {this.props.message}
        </p>
      </FancyBorder>
    );
  }
}

class SignUpDialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          title="Welcome"
          message="Thank you for visiting our spacecraft!" />
      </div>
    );
  }
}

export default SignUpDialog;