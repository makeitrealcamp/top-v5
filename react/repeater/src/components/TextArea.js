import React from 'react';
import { changeContent } from '../store/contentReducer';
import { connect } from 'react-redux';

function TextArea(props) {
  return (
    <textarea
      onChange={props.handleChange}
      value={props.value}
    ></textarea>
  );
}

const mapStateToProps = state => {
  return {
    value: state.contentReducer.content
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange(e) {
      dispatch(changeContent(e.target.value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
