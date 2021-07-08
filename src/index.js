import React, { Component } from 'react'
import { render } from 'react-dom'
import { SensorContainer } from './components/table/container'
import { SignupForm } from './components/form-signup'

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/header'
import { About } from './components/about'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/about" component={About} />
        <Route path="/table" component={SensorContainer} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


