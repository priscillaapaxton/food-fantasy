import './AddFood.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import RecipeNameForm from './RecipeNameForm';
import RecipeCategoryForm from './RecipeCategoryForm';

export default function AddFood() {

  const [recipeStep, setRecipeStep] = useState(0);
  const [currentComponent, setCurrentComponent] = useState(<RecipeNameForm/>)

 useEffect(() => {
  if (recipeStep === 1) {
    setCurrentComponent(<RecipeCategoryForm/>)
  }
 }, [recipeStep]);
  
  const changeStep = () => {
    setRecipeStep(1)
  }  
  return (
    <div className='add-food-container'>
      <div className='progress-container'>
        <div className='step' id='one' style={{ backgroundColor: recipeStep >= 0 ? 'red' : ''}}></div>
        <div className='step' id='two' style={{ backgroundColor: recipeStep >= 1 ? 'red' : ''}}></div>
        <div className='step' id='three' style={{ backgroundColor: recipeStep >= 2 ? 'red' : ''}}></div>
        <div className='step' id='four' style={{ backgroundColor: recipeStep >= 3 ? 'red' : ''}}></div>
        <div className='step' id='five' style={{ backgroundColor: recipeStep >= 4 ? 'red' : ''}}></div>
      </div>
      <p className='add-a-recipe'>ADD A RECIPE</p>
      {currentComponent}
      <button className='next-button' onClick={changeStep}>Next</button>
    </div>
  )
}