import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Contacts from "./contacts/Contacts";
import AddContact from "./contacts/AddContact";
import Navbar from "./Navbar";
import "../index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/contacts" component={Contacts} />
          <Route path="/contacts/new" component={AddContact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
