import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {
    loading: true,
    users: [],
    error: '',
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(({ data }) => this.setState({ users: data }))
      .catch(({ response }) => this.setState({ error: response.data.message }))
      .finally(() => this.setState({ loading: false }))
  }

  render() {
    const { loading, users, error } = this.state;
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    return (
      <div className="users">
        {users && users.length > 0 && users.map(user => (
          <div className="user" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
            <Link to={`/${user.id}`}>View more</Link>
            <Link to={`/update/${user.id}`}>Update</Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Home;
