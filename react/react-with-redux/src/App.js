import React from 'react';
import { connect } from 'react-redux';
import { INCREASE, DECREASE } from './store';
import './App.css';

function App(props) {
  console.log('props', props);

  function handleClick() {
    props.increase()
  }

  return (
    <div className="App">
      <button onClick={handleClick}>+</button>
      <span>{props.count}</span>
      <button onClick={props.decrease}>-</button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    count: state.count,
    // greet: 'Hola mundo'
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increase() {
      dispatch({ type: INCREASE });
    },
    decrease: function decrease() {
      dispatch({ type: DECREASE });
    }
  };
}

// HOC - High Order Component
export default connect(mapStateToProps, mapDispatchToProps)(App);
