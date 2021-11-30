

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import FormRegister from "./views/FormRegister";
import Form from "./views/Form"
import RecuperarContraseña from "./views/RecuperarContraseña";


function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/formRegister">
            <FormRegister/>

          </Route>
          <Route exact path="/form">
            <Form/>
          <Route exact path="/RecuperarContraseña">
         <RecuperarContraseña/>
          </Route>
                    <Route to="*">
            <h2>Not found - 404</h2>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
