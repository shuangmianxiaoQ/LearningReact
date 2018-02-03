import React, { Component } from 'react';

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <input type="text" ref={this.props.inputRef} />
    );
  }
}

class Parent extends Component {
  render() {
    return (
      <CustomTextInput inputRef={el => { console.log(el); this.inputElement = el; }} />
    );
  }
}

export default Parent;