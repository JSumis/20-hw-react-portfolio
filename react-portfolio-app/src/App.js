import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Project from './components/Project'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/Project">Project</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
      </div>
    </Router>
  );
}

export default App;
