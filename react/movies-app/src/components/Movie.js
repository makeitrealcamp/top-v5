import React from 'react';

function Movie({ title, overview }) {
  return (
    <div className="movie">
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  )
}

export default Movie;
