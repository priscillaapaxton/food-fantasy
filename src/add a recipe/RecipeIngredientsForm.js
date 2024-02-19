import './RecipeIngredientsForm.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeIngredientsForm({ advanceStep, buildRecipe }) {

  const [input, setInput] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const addIngredients = () => {
    setIngredients([...ingredients, {

    }])
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
      <p className='recipe-name-text'>Now let's add the ingredients, their amounts, and any special instructions they have.</p>
      <div className='ingredient-container'>
        {ingredients.map((ingredient) => (
          <div className='individual-ingredient'>
            <p>{ingredient}</p>
          </div>
        ))}
      </div>
      <div className='add-ingredient-form-container'>

        <div className='ingredient-input-container'>
          <p className='ingredient-count'>Ingredient {ingredients.length + 1}</p>
          <input 
          className='recipe-ingredient-input'
          value={input}
          onChange={handleInputChange}></input>
        </div>

        <div className='ingredient-dropdown-container'>
          <select 
          className='drop-down'
          id='quantity'/>
          <select
          className='drop-down' 
          id='measurement'/>
        </div>

        <div className='ingredient-notes-container'>
          <input 
          className='ingredient-notes'></input>
        </div>
      </div>
      <button onClick={sendIngredients}>Save and Continue</button>
    </div>
  )
}