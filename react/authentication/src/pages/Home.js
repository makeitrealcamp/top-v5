import React, { useEffect } from 'react';
import axios from 'axios';

function Home({ history }) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/users/greet',
      headers: {
        'Authorization': token
      }
    })
      .then(({ data }) => console.log(data))
      .catch(error => {
        localStorage.removeItem('token');
        history.push('/');
      })
  }, [history]);

  return <h1>Welcome</h1>
}

export default Home;
