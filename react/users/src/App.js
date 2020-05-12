import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/:id" component={Details} />
          <Route exact path="/update/:id" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
