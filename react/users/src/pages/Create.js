import React from 'react';
import axios from 'axios';
import Form from '../components/Form';

class Create extends React.Component {
  state = {
    name: '',
    age: 0,
    loading: true
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { loading, ...data } = this.state;

    axios({
      method: 'POST',
      baseURL: 'http://localhost:3000',
      url: '/',
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <Form
        name={this.state.name}
        age={this.state.age}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default Create;
