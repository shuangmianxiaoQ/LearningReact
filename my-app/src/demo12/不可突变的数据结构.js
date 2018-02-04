import React, { Component, PureComponent } from 'react';

class ListOfWords extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <div>{this.props.words.join(',')}</div>
    );
  }
}

class WordAdder extends Component {
  constructor(props) {
    super(props);
    this.state = { words: ['marklar'] }
  }

  handleClick = () => {
    // const words = this.state.words;
    // words.push('marklar');
    // console.log(words);
    // this.setState({ words: words })

    /* 防止数据突变 */
    this.setState(prevState => ({
      // words: prevState.words.concat(['marklar'])
      words: [...prevState.words, 'marklar']
    }))
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>AddWords</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default WordAdder;