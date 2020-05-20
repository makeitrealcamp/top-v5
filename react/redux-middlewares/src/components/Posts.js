import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/postReducer';

function Posts({ getPosts, posts }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      {posts && posts.length > 0 && posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.postReducer.posts,
  }
}

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
