import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Comment from './demo01/复合组件&Props';
// import Clock from './demo02/State';
// import Clock from './demo02/生命周期';
// import Clock from './demo02/单向数据流';
// import Toggle from './demo03/事件处理';
// import LoginContorl from './demo04/条件渲染';
// import Page from './demo04/阻止组件渲染';
// import NumberList from './demo05/列表';
// import Blog from './demo05/keys';
// import FlavorForm from './demo06/受控组件';
// import Reservation from './demo06/表单';
// import Calculator from './demo07/状态提升';
// import SignUpDialog from './demo08/组合';
import FilterableProductTable from './demo09/React理念';

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
      <FilterableProductTable />
    )
  }
}

export default App;
