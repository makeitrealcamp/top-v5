import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './store/countReducer';
import './App.css';
import Posts from './components/Posts';

function App(props) {
  return (
    <div className="App">
      <button onClick={props.increase}>+</button>
      {props.count}
      <button onClick={props.decrease}>-</button>
      <Posts />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.postReducer.posts,
    count: state.countReducer.count
  }
}

const mapDispatchToProps = {
  increase,
  decrease
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
