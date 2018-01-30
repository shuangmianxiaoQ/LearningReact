import React, { Component } from 'react';

const scaleNames = {
  c: '摄氏温度',
  f: '华氏温度'
}

function toCelsius (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit (celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  return String(Math.round(output * 1000) / 1000);
}

class BoilingVerdict extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.celsius >= 100) {
      return <p>水会烧开</p>
    }
    return <p>水不会烧开</p>;
  }
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    // this.state = {temperature: ''};
  }
  
  handleChange = event => {
    // this.setState({
    //   temperature: event.target.value
    // })
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>输入一个{scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleCelsiusChange = temperature => {
    this.setState({
      temperature,
      scale: 'c'
    })
  }

  handleFahrenheitChange = temperature => {
    this.setState({
      temperature,
      scale: 'f'
    })
  }
  
  render() {
    const scale = this.state.scale;   // 'c'
    const temperature = this.state.temperature;   // ''
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;