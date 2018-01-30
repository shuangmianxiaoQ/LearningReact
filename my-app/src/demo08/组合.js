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
    console.log(this.props);
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
        {this.props.children}
      </FancyBorder>
    );
  }
}

class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};
  }
  
  handleChange = event => {
    this.setState({
      login: event.target.value
    })
  }

  handleClick = () => {
    console.log('Welcome aboard, ' + this.state.login);
  }

  render() {
    return (
      <div>
        <Dialog
          title="Mars Exploration Program"
          message="How should we refer to you?">
          <input
            value={this.state.login}
            onChange={this.handleChange} />
          <button onClick={this.handleClick}>
            Sign Me Up!
          </button>
        </Dialog>
      </div>
    );
  }
}

export default SignUpDialog;