import React, { Component } from 'react';

class CustomTextInput extends Component {
  focus = () => {
    console.log(this.refs);
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        {/* <input type="text" ref="textInput" />   旧版API，已过时 */}
        <input type="text" ref={ input => this.textInput = input } />
        <input type="button" value="Focus the text input" onClick={this.focus} />
      </div>
    );
  }
}

export default CustomTextInput;