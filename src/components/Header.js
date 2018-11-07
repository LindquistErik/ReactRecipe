import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Our Recipe App</h1>
        <div>
          <button className="menu">
            <a href='/'>Home</a>
          </button>

          <button className="menu">
            <a href='/recipes/0'>Recipes</a>
          </button>

          <button className="menu">
            <a href='/contact'>Contact Us</a>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
