import React from 'react';
import Paragraph from './Paragraph';
import Input from './Input';

// function Repeater(props) {}
class Repeater extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      name2: '',
    }
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value, count: 0 })
  }

  handleChange2 = (event) => {
    this.setState({ name2: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <Paragraph name={this.state.name} />
        <Input
          handleChange={this.handleChange}
          value={this.state.name}
        />
        <Paragraph name={this.state.name2} />
        <Input
          handleChange={this.handleChange2}
          value={this.state.name2}
        />
      </React.Fragment>
    )
  }
}

export default Repeater;
