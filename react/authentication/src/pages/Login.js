import React, { useReducer } from 'react';
import axios from 'axios';

const SET_NAME = 'SET_NAME';
const SET_PASSWORD = 'SET_PASSWORD';

function reducer(state, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    default:
      return state;
  }
}

const initialState = {
  name: '',
  password: ''
}

function Login(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users/signin',
        data: state
      });

      localStorage.setItem('token', data.token);
      props.history.push('/home');
    } catch (error) {
      console.log(error)
    }
  }

  const { name, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => dispatch({ type: SET_NAME, payload: e.target.value })}
      />
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => dispatch({ type: SET_PASSWORD, payload: e.target.value })}
      />
      <button>Login</button>
    </form>
  )
}

export default Login;
