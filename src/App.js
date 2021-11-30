import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Demo from "./views/Demo"
import Details from "./views/Details"


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/demo">
          <Demo />
        </Route>
        <Route exact path="/demo/:id">
          <Details />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/recoverPassword">
        <RecoverPassword />
      </Route>
      <Route to="*">
        <h2>Not found - 404</h2>
      </Route>
    </Switch>
    </Router >
  );
}

export default App;
