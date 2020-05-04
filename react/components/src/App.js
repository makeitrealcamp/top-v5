import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      name: ''
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   console.log(this);
  // }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value, count: 0 })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
        <p>{this.state.name}</p>
        <input type="text" onChange={this.handleChange} value={this.state.name} />
        {/* <input type="text" onChange={this.handleChange} /> */}
      </div>
    );
  }
}

export default App;
