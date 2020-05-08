import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './App.css';

// 1. Externos con CSS
// 2. En Linea.
// 3. CSS in JS (styled-components, emotion)
// 4. Librerias de componentes (Bootstrap, Matirialize, Ant Design, Bulma, etc.)

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.dark ? 'black' : 'white'};
`;

const Heading = styled.h1`
  font-family: Helvetica;
`;

// const StyledLink = styled(Link)``;
// const ExtendedBox = styled(Box)``;
// const StyledComponent = styled(App)``;

const StyledButton = styled(Button)`
  background-color: red;
`;

function App({ className, show }) {
  // const hide = show ? 'App-show' : 'App-hide';

  const styles = {
    container: {
      backgroundColor: 'blue',
      // width: 200,
      // display: show ? 'block' : 'none',
      display: 'grid',
    },
    logo: {},
    link: {}
  };

  return (
    // <div className={`App ${hide}`}>
    <div className="App" style={styles.container}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box dark />
        <Heading>Hola Mundo</Heading>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StyledButton size="lg">Click me</StyledButton>
        <Card>
          <Card.Body>
            <Card.Title>Hola mundo</Card.Title>
          </Card.Body>
        </Card>
        <Box />
        <div></div>
      </header>
    </div>
  );
}

export default App;
