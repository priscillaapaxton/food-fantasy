import './AddFood.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import RecipeNameForm from './RecipeNameForm';
import RecipeCategoryForm from './RecipeCategoryForm';
import RecipeIngredientsForm from './RecipeIngredientsForm';
import RecipeInstructionsForm from './RecipeInstructionsForm';
import RecipeReview from './RecipeReview';

export default function AddFood() {
  const [recipeStep, setRecipeStep] = useState(0);

  const [recipe, setRecipe] = useState({
    name: '',
    category: '',
    ingredients: [],
    instructions: [],
  })

  const buildRecipe = (name, input) => {
    setRecipe({
      ...recipe, 
      [name]: input 
    })
  }

  const advanceStep = () => {
    recipeStep <= 3 && setRecipeStep(recipeStep + 1)
  }  

  const decreaseStep = () => {
    recipeStep > 0 && setRecipeStep(recipeStep - 1)
  }

  let currentComponent = null;
  if (recipeStep === 0) {
    currentComponent = <RecipeNameForm
    advanceStep={advanceStep} 
    buildRecipe={buildRecipe}
    />
  }
  else if (recipeStep === 1) {
    currentComponent = <RecipeCategoryForm 
    advanceStep={advanceStep} 
    buildRecipe={buildRecipe}/>
  }
  else if (recipeStep === 2) {
    currentComponent = <RecipeIngredientsForm 
    advanceStep={advanceStep}
    buildRecipe={buildRecipe}
    recipe={recipe}/>
  }
  else if (recipeStep === 3) {
    currentComponent = <RecipeInstructionsForm
    advanceStep={advanceStep} 
    buildRecipe={buildRecipe}/>
  }
  else if (recipeStep === 4) {
    currentComponent = <RecipeReview 
    recipe={recipe}/>
  }

  return (
    <div className='add-food-container'>
      <div className='progress-container'>
        {recipeStep > 0 && <button onClick={decreaseStep}>BACK</button>}
        <div className='step' id='one' style={{ backgroundColor: recipeStep >= 0 ? 'red' : ''}}></div>
        <div className='step' id='two' style={{ backgroundColor: recipeStep >= 1 ? 'red' : ''}}></div>
        <div className='step' id='three' style={{ backgroundColor: recipeStep >= 2 ? 'red' : ''}}></div>
        <div className='step' id='four' style={{ backgroundColor: recipeStep >= 3 ? 'red' : ''}}></div>
        <div className='step' id='five' style={{ backgroundColor: recipeStep >= 4 ? 'red' : ''}}></div>
      </div>
      <p className='add-a-recipe'>ADD A RECIPE</p>
      <div className='current-component-container'>
        {currentComponent}
      </div>
      {/* <div className='button-container'>
        {recipeStep > 0 && 
          <button 
          className='next-button' 
          onClick={decreaseStep}>Back
          </button> 
        }
        <button className='next-button' onClick={advanceStep}>Next</button>
      </div> */}
    </div>
  )
}