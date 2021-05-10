import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Pkmn from "./Pkmn";

function App() {
  return (
    <Router>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/pkmn" component={Pkmn} />
    </Router>
  );
}

export default App;
