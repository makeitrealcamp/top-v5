import React from 'react';
import { connect } from 'react-redux';

function Content(props) {
  return (
    <p>{props.count} {props.content}</p>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    content: state.contentReducer.content,
    count: state.countReducer.count
  };
}

export default connect(mapStateToProps)(Content);
