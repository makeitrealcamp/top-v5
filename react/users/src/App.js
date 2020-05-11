import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

class Home extends React.Component {
  state = {
    loading: true,
    users: [],
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(({ data }) => this.setState({ users: data, loading: false }))
      .catch(error => console.dir(error))
  }

  render() {
    const { loading, users } = this.state;
    if(loading) return <p>Loading...</p>
    return (
      <div className="users">
        {users && users.length > 0 && users.map(user => (
          <div className="user" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
            {/* <Link to={`/${user.id}`}>View more</Link>
            <Link to={`/update/${user.id}`}>Update</Link> */}
          </div>
        ))}
      </div>
    )
  }
}

class CreateUser extends React.Component {
  state = {
    name: '',
    age: 0,
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      baseURL: 'http://localhost:3000',
      url: '/',
      data: this.state,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <button type="submit">Create user</button>
      </form>
    )
  }
}

// class UpdateUser extends React.Component {
//   state = {
//     name: '',
//     age: 0,
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     axios({
//       method: 'PUT',
//       baseURL: 'http://localhost:3000',
//       url: `/${this.props.params.id}`,
//       data: this.state,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(() => this.props.history.push('/'))
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           onChange={this.handleChange}
//           value={this.state.name}
//         />
//         <label htmlFor="age">Age</label>
//         <input
//           type="number"
//           name="age"
//           id="age"
//           onChange={this.handleChange}
//           value={this.state.age}
//         />
//         <button type="submit">Create user</button>
//       </form>
//     )
//   }
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CreateUser} />
          {/* <Route exact path="/update/:id" component={UpdateUser} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
