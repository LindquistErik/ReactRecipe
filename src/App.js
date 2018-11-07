import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Home from './pages/home.js'
import Contact from './pages/contact.js'
import RecipeCard from './pages/RecipeCard.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="content">
          <Router>
            <Switch>
              <div>
                <Route path="/recipes/:id" component={RecipeCard} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
              </div>
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

export default App;
