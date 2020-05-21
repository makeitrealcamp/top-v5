import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function PrivateRoute(props) {
  const token = localStorage.getItem('token');

  if(!token) return <Redirect to="/" />

  return (
    <Route {...props} />
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <PrivateRoute exact path="/home" component={Home} />
          {/* <PrivateRoute exact path="/private" component={Private} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
