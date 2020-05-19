import React from 'react';
import { connect } from 'react-redux';
import { increaseCount } from '../store/countReducer';

function Button({ handleClick }) {
  return <button onClick={handleClick}>Increase count</button>;
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(increaseCount());
    }
  }
}

export default connect(null, mapDispatchToProps)(Button);
