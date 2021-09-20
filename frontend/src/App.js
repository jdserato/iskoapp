import './App.css';
// import App from "./components/App";
import Landing from './pages/landing/Landing'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { render } from "react-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
const container = document.getElementById("app");
render(<App />, container);