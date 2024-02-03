import './RecipeIngredientsForm.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeIngredientsForm() {

  const [input, setInput] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const addIngredients = () => {
    setIngredients([...ingredients, input])
    setInput('')
  }

   console.log(input)
   console.log('ingredient', ingredients)
  return (
    <div className='recipe-ingredients-form'>
      <p className='recipe-ingredient-prompt'>What goes in it?</p>
      <p className='recipe-name-text'>BLANK, ok that's great! Now let's add the ingredients and the amounts.</p>
      <input 
      className='recipe-name-input'
      value={input}
      onChange={handleInputChange}></input>
      <button onClick={addIngredients}>Add ingredient</button>
      <div className='ingredient-container'>
        {ingredients.map((ingredient) => (
          <p>{ingredient}</p>
        ))}
      </div>
    </div>
  )
}