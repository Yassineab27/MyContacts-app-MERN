import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Contacts from "./Contacts";
import Navbar from "./Navbar";
import "../index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Contacts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
