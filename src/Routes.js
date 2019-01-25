import React from "react";

import { Route, Switch } from "react-router-dom";

import NotFound404 from './NotFound404'
import MainPage from './MainPage'

export default () =>
  <Switch>
    <Route path="/" exact component={MainPage} />
    <Route component={NotFound404} />
  </Switch>;
