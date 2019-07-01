import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactState from "../context/contact/ContactState";

import Home from "./Home";
import About from "./About";
import Navbar from "./layouts/Navbar";
import "../index.css";

const App = () => {
  return (
    <ContactState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </ContactState>
  );
};

export default App;
