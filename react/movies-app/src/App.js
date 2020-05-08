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
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/popular/:page" component={Popular} />
          <Route exact path="/now-playing" component={NowPlaying} />
          <Route exact path="/top-rated" component={TopRated} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Redirect from="*" to="/popular" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
