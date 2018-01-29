import React, { Component } from 'react';
import './warning.css';

class WarningBanner extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    if (!this.props.warn) {
      return null
    }
    return (
      <div className='warning'>
        Warning!
      </div>
    );
  }
}

class Page extends Component {
  constructor() {
    super();
    this.state = { showWarning: true }
  }
  
  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default Page;