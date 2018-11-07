import React, { Component } from 'react';
import '../App.css';
import recipes from '../recipe_list.js'
import Button from './button.js'

class NavBar extends Component {
  render() {
    var content = recipes.map((recipe,i) => {
      return (
          <Button route={`/recipes/${recipe.id}`} title={recipe.title} id={i} recipeCardHandleClick={this.props.recipeCardHandleClick}/>
      )
    })
    return (
      <div className="NavBar">
        <p>
          {content}
        </p>
        <a href="https://www.buzzfeed.com/rachelysanders/genius-three-ingredient-recipes">Source: Buzzfeed.com</a>
      </div>
    );
  }
}

export default NavBar;
