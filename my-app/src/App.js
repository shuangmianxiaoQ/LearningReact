import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Comment from './demo01/复合组件&Props';
// import Clock from './demo02/State';
// import Clock from './demo02/生命周期';
// import Clock from './demo02/单向数据流';
// import Toggle from './demo03/事件处理';
// import LoginContorl from './demo04/条件渲染';
import Page from './demo04/阻止组件渲染';

// const comment = {
//   date: new Date().toLocaleDateString(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };

class App extends Component {
  render() {
    return (
      <Page />
    )
  }
}

export default App;
