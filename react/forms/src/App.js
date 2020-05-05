import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    lastname: '',
    age: 18,
    terms: false,
    users: []
  };

  handleChange = (e) => {
    const nameIsCheckbox = ['terms', 'mailList'];
    const { name } = e.target;
    const value = nameIsCheckbox.includes(name) ? e.target.checked : e.target.value;

    this.setState({ [name]: value });

    // const { name, value, checked } = e.target;

    // this.setState({ [name]: name === 'terms' ? checked : value });
  }

  // handleChangeName = (e) => {
  //   this.setState({ name: e.target.value });
  // }

  // handleChangeLastName = (e) => {
  //   this.setState({ lastname: e.target.value });
  // }

  // handleChangeAge = (e) => {
  //   this.setState({ age: e.target.value });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const { name, lastname, age, terms } = this.state;
    const user = { name, lastname, age, terms };
    const users = this.state.users.concat(user)

    this.setState({
      users,
      name: '',
      lastname: '',
      age: 18,
      terms: false
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            id="name"
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.lastname}
            name="lastname"
            id="lastname"
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            onChange={this.handleChange}
            value={this.state.age}
            name="age"
            id="age"
          />
          <label htmlFor="terms">Terms and Conditions</label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.terms}
            name="terms"
            id="terms"
          />

          {/* <input type="number" />
          <input type="email" />
          <input type="password" />
          <input type="checkbox" />
          <input type="radio" />
          <select>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
          </select>
          <textarea></textarea> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
