import React from 'react';
import {
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import Home from '../../pages/Home';
  import About from '../../pages/About';
  import Contact from '../../pages/Contact';
  import resume from '../../david_valderrama_resume.pdf';

export default function Navigation() {
  return (
    <>
        <nav>
            <div className="nav-wrapper teal darken-3">
            <Link to="/" className="brand-logo">Home</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <a class="grey-text text-lighten-3" download href={resume}>Resume</a>
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
  </>
  );
}