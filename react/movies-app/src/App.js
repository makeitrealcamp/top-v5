import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Popular from './pages/Popular';
import NowPlaying from './pages/NowPlaying';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import './App.css';

function PrivateRoute(props) {
  const autenticated = localStorage.getItem('token');

  if(!autenticated) return <Redirect to="/login" />;
  return (
    <Route {...props} />
  );
}

function AdminRoute(props) {
  const token = localStorage.getItem('token');
  const isAdmin = token.isAdmin();

  if(token && !isAdmin) return <Redirect to="/popular" />
  if(!token && !isAdmin) return <Redirect to="/login" />
  return (
    <Route {...props} />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/popular" component={Popular} />
          <PrivateRoute exact path="/popular/:page" component={Popular} />
          <PrivateRoute exact path="/now-playing" component={NowPlaying} />
          <PrivateRoute exact path="/top-rated" component={TopRated} />
          <AdminRoute exact path="/upcoming" component={Upcoming} />
          <Redirect from="*" to="/popular" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
