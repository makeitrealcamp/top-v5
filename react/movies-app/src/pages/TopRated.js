import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

class TopRated extends Component {
  state = {
    movies: [],
    error: '',
    loading: true,
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=71bb6f7fa8a4064847f8b8cd68582164&language=en-US&page=1'
    })
      .then(response => this.setState({ movies: response.data.results }))
      .catch(error => this.setState({ error: error.response.data.status_message }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { movies, loading, error } = this.state;

    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>;
    return (
      <div>
        {
          movies &&
          movies.length > 0 &&
          movies.map(({ id, title, overview }) => {
            return (
              <Movie
                key={id}
                title={title}
                overview={overview}
              />
            )
          })
        }
      </div>
    )
  }
}

export default TopRated;
