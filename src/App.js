import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/index.css";

import Routes from "./Routes";
import Header from "./components/Header";

const App = () => (
  <Router>
    <Header />
    <Routes />
  </Router>
);

export default App;
