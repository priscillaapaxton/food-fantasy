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
  const [currentComponent, setCurrentComponent] = useState(<RecipeNameForm/>)

  //should this remain an object?
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

  useEffect(() => {
    if (recipeStep === 0) {
      setCurrentComponent(<RecipeNameForm 
      buildRecipe={buildRecipe}
      />)
    }
    else if (recipeStep === 1) {
      setCurrentComponent(<RecipeCategoryForm 
      buildRecipe={buildRecipe}/>)
    }
    else if (recipeStep === 2) {
      setCurrentComponent(<RecipeIngredientsForm buildRecipe={buildRecipe}/>)
    }
    else if (recipeStep === 3) {
      setCurrentComponent(<RecipeInstructionsForm
      buildRecipe={buildRecipe}/>)
    }
    else if (recipeStep === 4) {
      setCurrentComponent(<RecipeReview recipe={recipe}/>)
    }
  }, [recipeStep]);

//let currentComponent = null;

  
  const advanceStep = () => {
    recipeStep <= 3 && setRecipeStep(recipeStep + 1)
  }  

  const decreaseStep = () => {
    recipeStep > 0 && setRecipeStep(recipeStep - 1)
  }

  console.log('recipe', recipe)

  //make this more effieicnt? can these four functions be combined into one?
  const context = {
    recipe,
    buildRecipe,
    advanceStep,
    decreaseStep
  };
  return (
    <AddFoodContext.Provider value={context}>
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
          {recipeStep > 0 && 
            <button 
            className='next-button' 
            onClick={decreaseStep}>Back
            </button> 
          }
          <button className='next-button' onClick={advanceStep}>Next</button>
        </div>
      </div>
    </AddFoodContext.Provider>
  )
}

export const AddFoodContext = React.createContext();
AddFoodContext.displayName = "AddFoodContext"
export const useAddFoodContext = () => {
  return React.useContext(AddFoodContext);
};
const AddFoodProvider = (props) => {
  const [recipeStep, setRecipeStep] = useState(0);
  //should this remain an object?
  const [recipe, setRecipe] = useState({
    name: '',
    category: '',
    ingredients: [],
    instructions: [],
  });

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

  const context = {
    recipe,
    buildRecipe,
    advanceStep,
    decreaseStep
  };

  return (
    <AddFoodContext.Provider value={context}>
      {props.children}
    </AddFoodContext.Provider>
  );
}