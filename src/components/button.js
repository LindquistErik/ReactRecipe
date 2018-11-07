import React, { Component } from 'react';
import '../App.css';


class Button extends Component {
  render(){
    return (
      <div className="NavBar">
        <button className="NavButtons" onClick={this.handleClick}>
          <a href={this.props.route}>{this.props.title}</a>
        </button>
      </div>
    );
  }
}

export default Button;
