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
// import FilterableProductTable from './demo09/React理念';
// import ListOfTenThings from './demo10/深入JSX';
// import CustomTextInput from './demo11/Refs';
// import Parent from './demo11/Refs&DOM';
// import CounterButton from './demo12/shouldComponentUpdate应用';
// import WordAdder from './demo12/不可突变的数据结构';
// import Container from './demo13/Portal用法';
import Parent from './demo13/Portals事件冒泡';

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
      <Parent />
    )
  }
}

export default App;
