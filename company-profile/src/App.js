import React from "react";

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import Testimonial from "./pages/Testimonial/Testimonial";
import "./App.scss"

import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/service">
            <Service />
          </Route>

          <Route exact path="/testimonial">
            <Testimonial />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Redirect to="/" />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
