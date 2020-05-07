import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import Tasks from './pages/Tasks';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Images from './pages/Images';
import TasksDetails from './pages/TasksDetails';
import './App.css';

// SPAs - Single Page Application
// Window - Document - History - Location
const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/images">Images</Link>
    <Link to="/tasks">Tasks</Link>
  </nav>
)

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/tasks/:id" component={TasksDetails} />
          <Route exact path="/images" component={Images} />
          <Route path="*" component={NotFound} />
          {/* <Redirect exact from="*" to="/" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
