import React, { useState } from 'react';
import logo from './logo.svg';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';

const GET_USERS = gql`
  {
    users {
      id
      name
      age
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!) {
    createUser(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;

function App() {
  // const { data, loading, error } = useQuery(GET_USERS);
  const [ createUser, { data, loading, error } ] = useMutation(CREATE_USER);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    createUser({ variables: { name, age: +age } });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Ups! Something went wrong!</p>

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label htmlFor="age">
        Age
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </label>
      <button>Create user</button>
    </form>
      {/* {data && data.users && data.users.length > 0 && data.users.map(user => {
        return (
          <div className="users" key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
          </div>
        )
      })} */}
    </div>
  );
}

export default App;
