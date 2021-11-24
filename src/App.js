import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Details from "./views/Details"
import Form from "./views/Form"

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/demo">
            <Form/>
          </Route>
          <Route exact path="/demo/:id">
            <Details/>
          </Route>
          <Route to="*">
            <h2>Not found - 404</h2>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
