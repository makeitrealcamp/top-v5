import React from 'react';
import Counter from './components/Counter';
import Repeater from './components/Repeater';
import './App.css';

class App extends React.Component {
  render() {
    console.log('App state', this.state)
    return (
      <div className="App">
        <Counter />
        <Repeater />
        {/* Repeater({ name: 'Simon', handleChange() {} }) */}
        {/* <Repeater
          name={this.state.name}
          handleChange={this.handleChange}
          lastname="hoyos"
          age={28}
          working
          obj={{ a: 1, b: 2 }}
        /> */}
      </div>
    );
  }
}

export default App;
