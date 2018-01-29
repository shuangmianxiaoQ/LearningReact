import React, { Component } from 'react';

class FormattedDate extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <h2>It is {this.props.date.toLocaleTimeString()}</h2>
    )
  }
}

class Clock extends Component {
  constructor() {
    super();
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;