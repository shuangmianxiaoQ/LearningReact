import React, { Component } from 'react';

class Repeat extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    let items = [];
    for (let i = 0; i < this.props.numTimes; i++) {
      items.push(this.props.children(i));
    }
    return (
      <div>
        {items}
      </div>
    );
  }
}

class ListOfTenThings extends Component {
  render() {
    return (
      <Repeat numTimes={10}>
        {index => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    );
  }
}

export default ListOfTenThings;