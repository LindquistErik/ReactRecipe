import React, { Component } from 'react';
import '../App.css';
import NavBar from '../components/NavBar.js'
import recipes from '../recipe_list.js'

class RecipeCard extends Component {
  constructor(props){
    super(props)
    this.state={
      id: 0
    }
  }

  render() {
    let { id } = this.props.match.params
    let list = recipes[id].ingredients.map((el,i) => {
          return(
          <p>{(i+1)+'. '+el}</p>
        )
        })
    return (
      <main>
        <div className="MasterNavBar">
          <NavBar recipeCardHandleClick={this.recipeCardHandleClick}/>
        </div>
        <div className="RecipeTitle">
          <h2>{recipes[id].title}</h2>
          <hr/>
          <div>
              <img src={recipes[id].img}/>
          </div>
          <br/>
        </div>
        <div id="ingredientsList">
        <h3>Ingredients</h3>
          {list}
        </div>
      </main>
    );
  }

}

export default RecipeCard;
