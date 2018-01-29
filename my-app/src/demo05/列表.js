import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <li>
        {this.props.value}
      </li>
    );
  }
}

class NumberList extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }

  render() {
    const numbers = this.state.numbers;
    const listItems = numbers.map(number => {
      return <ListItem key={number.toString()} value={number} />
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default NumberList;