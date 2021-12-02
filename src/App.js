
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Setting from "./views/Setting";
import Details from "./views/Details";
import Login from "./components/Login";
import Register from "./components/Register";
import RecoverPassword from "./components/RecoverPassword"

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Setting />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/details">
          <Details /> 
          </Route>
          <Route exact path="/setting">
          <Setting />
        </Route>
        <Route exact path="/setting/login">
          <Login />
        </Route>
        <Route exact path="/setting/register">
          <Register />
        </Route>
        <Route exact path="/setting/recoverPassword">
          <RecoverPassword />
        </Route>
        <Route to="*">
          <h2>Not found - 404</h2>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;