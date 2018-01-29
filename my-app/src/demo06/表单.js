import React, { Component } from 'react';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 3
    }
  }

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Number of guests:
          <input
            type="number"
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default Reservation;