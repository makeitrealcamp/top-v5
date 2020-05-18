import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// class App extends React.Component {
//   state = {
//     posts: [],
//     loading: true,
//     error: null
//   };

//   componentDidMount() {
//     axios({
//       method: 'GET',
//       url: 'https://jsonplaceholder.typicode.com/posts'
//     })
//       .then(({ data }) => this.setState({ posts: data }))
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ loading: false }))
//   }

//   render() {
//     const {posts, loading, error} = this.state;
//     if(loading) return <p>Loading...</p>
//     if(error) return <p>Something went wrong</p>
//     return (
//       <div className="App">
//         {posts && posts.length > 0 && posts.map(post => (
//           <div>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

function Posts({ posts }) {
  return posts && posts.length > 0 && posts.map(post => (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  ))
}

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
      .then(({ data }) => setPosts(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, []);

  return {
    posts,
    loading,
    error,
  }
}


function App() {
  // 1. Los hooks siempre se deben ejecutar en el mismo orden.
  // 2. Los hooks solo se pueden usar en el primer nivel de un componente.
  // 3. Los hooks solo se pueden usar dentro de un componente de React u otro hook.
  // 4. Todos los hooks se deben nombrar usando use.

  // useState
  const [count, setCount] = useState(0);
  const { posts, loading, error } = usePosts();

  function handleClick(e) {
    setCount(count + 1);
  }

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Something went wrong</p>;
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <Posts posts={posts} />
    </div>
  );
}

export default App;
