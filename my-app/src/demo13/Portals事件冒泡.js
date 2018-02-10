import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './portal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.getElementById('modal-root').appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById('modal-root').removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Child extends Component {
  // 没有点击事件，但可以事件冒泡至Parent组件
  render() {
    return (
      <div className="modal">
        <button>Click</button>
      </div>
    );
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div id="app-root">
          <div onClick={this.handleClick}>
            <p>Number of clicks: {this.state.count}</p>
            <p>
              Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.
            </p>
            <Modal>
              <Child />
            </Modal>
          </div>
        </div>
        <div id="modal-root"></div>
      </React.Fragment>
    );
  }
}

export default Parent;