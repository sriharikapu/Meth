import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


import { NavBar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';
import { HomePage } from './pages/Home.js';
import { CataloguePage } from './pages/Catalogue';
import { NotFoundPage } from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <NavBar />
            <div className="page-wrapper">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/catalogue" component={CataloguePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
