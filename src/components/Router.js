import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Details from "./Details";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route path="/details/:id" component={Details}></Route>
        <Route path="" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
