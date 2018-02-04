import React, { Component, PureComponent } from 'react';

// class CounterButton extends Component {
class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.count !== nextState.count) {
  //     return true;
  //   }
  //   return false;
  // }
  
  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}>
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}

export default CounterButton;