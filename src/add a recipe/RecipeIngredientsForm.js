import './RecipeIngredientsForm.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeIngredientsForm({ advanceStep, buildRecipe, recipe  }) {

  const [input, setInput] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const addIngredients = () => {
    setIngredients([...ingredients, input])
    setInput('')
  }

  const sendIngredients = () => {
    ingredients && 
    advanceStep()
    buildRecipe('ingredients', ingredients)
  }

  return (
    <div className='recipe-ingredients-form'>
      <p className='recipe-ingredient-prompt'>What goes in it?</p>
      <p className='recipe-name-text'>{recipe.category}, ok that's great! Now let's add the ingredients and the amounts.</p>
      <div className='ingredient-container'>
        {ingredients.map((ingredient) => (
          <div className='individual-ingredient'>
            <p>{ingredient}</p>
          </div>
        ))}
      </div>
      <input 
      className='recipe-name-input'
      value={input}
      onChange={handleInputChange}></input>
      <div className='button-container'>
        <button onClick={addIngredients}>Add ingredient</button>
        <button onClick={sendIngredients}>Save and Continue</button>
      </div>
    </div>
  )
}