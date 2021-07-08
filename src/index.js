import React from 'react'
import ReactDOM from 'react-dom';
import { SensorContainer } from './components/table/container'
import { SignupForm } from './components/form-signup'
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/header'
import { About } from './components/about'
import { Converter } from './components/converter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/about" component={About} />
        <Route path="/table" component={SensorContainer} />
        <Route path="/converter" component={Converter} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


