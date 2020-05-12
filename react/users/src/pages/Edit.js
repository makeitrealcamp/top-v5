import React from 'react';
import axios from 'axios';
import Form from '../components/Form';

class Edit extends React.Component {
  state = {
    name: '',
    age: 0,
    loading: true
  }

  componentDidMount() {
    axios({
      method: 'GET',
      baseURL: 'http://localhost:3000',
      url: `/${this.props.match.params.id}`,
      header: {
        'Content-Type': 'application/json'
      }
    })
      .then(({ data: { name, age } }) => this.setState({ name, age, loading: false }))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { loading, ...data } = this.state;

    axios({
      method: 'PUT',
      baseURL: 'http://localhost:3000',
      url: `/${this.props.match.params.id}`,
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
        updating={true}
      />
    )
  }
}

export default Edit;
