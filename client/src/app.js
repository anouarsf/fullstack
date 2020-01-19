import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import FormPage from "./views/FormPage";
import AdminLayout from "./layouts/Admin";
import Registeruser from "./views/Registeruser";
import Company from "./views/Company";

export default class Register extends React.Component {
  state = {
    toDashboard: false
  };

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/login" />;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={FormPage} />
          <Route path="/register" component={Registeruser}/>
          <Route path="/company" component={Company}/>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}
