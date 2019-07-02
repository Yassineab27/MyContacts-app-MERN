import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Contacts from "./contacts/Contacts";
import AddContact from "./contacts/AddContact";
import EditContact from "./contacts/EditContact";
import Navbar from "./Navbar";
import "../index.css";

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contacts/new" component={AddContact} />
          <Route path="/contacts/:id" component={EditContact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
