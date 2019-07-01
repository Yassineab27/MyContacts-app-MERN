import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Contacts from "./contacts/Contacts";
import AddContact from "./contacts/AddContact";
import Navbar from "./Navbar";
import "../index.css";

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/contacts" component={Contacts} />
          <Route path="/contacts/new" component={AddContact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
