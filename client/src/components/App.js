import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Home from "./auth/Home";
import Contacts from "./contacts/Contacts";
import AddContact from "./contacts/AddContact";
import EditContact from "./contacts/EditContact";
import User from "./user/User";
import Navbar from "./layout/Navbar";
import Alert from "./layout/Alert";

import Login from "./auth/Login";
import Register from "./auth/Register";

import "../index.css";

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Alert />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/register" component={Register} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/me" component={User} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contacts/new" component={AddContact} />
          <Route path="/contacts/:id" component={EditContact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
