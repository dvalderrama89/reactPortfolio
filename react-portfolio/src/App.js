import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <nav>
        <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Home</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>  
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}