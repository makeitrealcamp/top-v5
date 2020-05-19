import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';
import Content from './components/Content';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <TextArea />
      <Button />
      <Content />
    </div>
  );
}

export default App;
