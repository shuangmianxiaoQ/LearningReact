import React, { Component } from 'react';

class LoginButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <button onClick={this.props.onClick} style={{width: 200, height: 40}}>Login</button>
    );
  }
}

class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <button onClick={this.props.onClick} style={{width: 200, height: 40}}>Logout</button>
    );
  }
}

class UserGreeting extends Component {
  render() {
    return (
      <h1>Welcome back!</h1>
    );
  }
}

class GuestGreeting extends Component {
  render() {
    return (
      <h1>Please sign up.</h1>
    );
  }
}

class Greeting extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }
}

class LoginControl extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;