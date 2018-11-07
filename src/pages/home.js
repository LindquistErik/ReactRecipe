import React, { Component } from 'react';
import NavBar from '../components/NavBar.js'
import recipes from '../recipe_list.js'
import '../App.css';

class Home extends Component {
  render() {
    console.log(Math.floor(Math.random()*5));
    return (
      <main>
        <div className="MasterNavBar">
          <NavBar appHandleClick={this.appHandleClick}/>
        </div>
        <div className="SaltBae">
          <div className="Featured">
            <h1>Featured Recipes</h1>
            <img className="featuredImage" src={recipes[Math.floor(Math.random()*5)].img}/>
            <img className="featuredImage" src={recipes[Math.floor(Math.random()*5)].img}/>
            <img className="featuredImage" src={recipes[Math.floor(Math.random()*5)].img}/>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGZxb_sKIF0i4giBKFdErY_ewwtqQnDyeB2KxrVBHBPhKdC8ACA" width="450px" height="500px" />
          </div>
        </div>
        <div id="ingredientsList">
        </div>
      </main>

    )
  }
}

export default Home;
