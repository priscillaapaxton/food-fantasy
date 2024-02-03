import './AddFood.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import RecipeNameForm from './RecipeNameForm';
import RecipeCategoryForm from './RecipeCategoryForm';
import RecipeIngredientsForm from './RecipeIngredientsForm';
import RecipeInstructionsForm from './RecipeInstructionsForm';

export default function AddFood() {

  const [recipeStep, setRecipeStep] = useState(0);
  const [currentComponent, setCurrentComponent] = useState(<RecipeNameForm/>)
  const [recipeName, setRecipeName] = useState('')
  const [recipeCategory, setRecipeCategory] = useState('')
  const [recipeIngredients, setRecipeIngredients] = useState([])

  //should this remain an object?
  // const [recipe, setRecipe] = useState({
  //   name: '',
  //   category: '',
  //   ingredients: [],
  //   instructions: [],
  // })

  const getRecipeName = (input) => {
    setRecipeName(input)
  }

  const getRecipeCategory = (input) => {
    setRecipeCategory(input)
  }

  const getRecipeIngredients = (input) => {
    setRecipeIngredients(input)
  }

 useEffect(() => {
  if (recipeStep === 0) {
    setCurrentComponent(<RecipeNameForm getRecipeName={getRecipeName}/>)
  }
  else if (recipeStep === 1) {
    setCurrentComponent(<RecipeCategoryForm getRecipeCategory={getRecipeCategory}/>)
  }
  else if (recipeStep === 2) {
    setCurrentComponent(<RecipeIngredientsForm getRecipeIngredients={getRecipeIngredients}/>)
  }
  else if (recipeStep === 3) {
    setCurrentComponent(<RecipeInstructionsForm/>)
  }
 }, [recipeStep]);
  
  const advanceStep = () => {
    recipeStep < 5 && setRecipeStep(recipeStep + 1)
  }  

  const decreaseStep = () => {
    recipeStep > 0 && setRecipeStep(recipeStep - 1)
  }

  //make this more effieicnt? can these four functions be combined into one?

  console.log('recipename', recipeName)
  console.log('recipecategory', recipeCategory)
  console.log('ingredients', recipeIngredients)
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
      <div className='current-component-container'>
        {currentComponent}
      </div>
      <div className='button-container'>
        {recipeStep > 0 && <button className='next-button' onClick={decreaseStep}>Back</button> }
        <button className='next-button' onClick={advanceStep}>Next</button>
      </div>
    </div>
  )
}