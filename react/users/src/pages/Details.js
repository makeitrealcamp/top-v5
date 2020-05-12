import React from 'react';
import axios from 'axios';

class Details extends React.Component {
  state = {
    user: null,
    loading: true,
    error: '',
  };

  componentDidMount() {
    axios({
      method: 'GET',
      baseURL: 'http://localhost:3000',
      url: `/${this.props.match.params.id}`,
      header: {
        'Content-Type': 'application/json'
      }
    })
      .then(({ data }) => this.setState({ user: data, loading: false }))
  }

  render() {
    const { loading, user } = this.state;
    if(loading) return <p>Loading...</p>
    return (
      <div className="user">
        <h2>{user.name}</h2>
        <p>{user.age}</p>
      </div>
    )
  }
}

export default Details;
