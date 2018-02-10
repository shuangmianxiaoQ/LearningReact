import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './portal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    console.log(props.children);
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
    )
  }
}

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleHide = () => {
    this.setState({ showModal: false });
  };
  
  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>
            With a portal, we can render content into a different part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;
    return (
      <React.Fragment>
        <div id="app-root">
          <div className="app">
            This div has overflow: hidden.
            <button onClick={this.handleShow}>Show modal</button>
            {modal}
          </div>
        </div>
        <div id="modal-root"></div>
      </React.Fragment>
    );
  }
}

export default Container;