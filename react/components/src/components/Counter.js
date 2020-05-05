import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('Counter state', this.state)
    return (
      <React.Fragment>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </React.Fragment>
    );
  }
}

export default Counter;
