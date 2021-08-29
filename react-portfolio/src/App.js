import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
        <Header />
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
        <Footer />
    </Router>
  );
}