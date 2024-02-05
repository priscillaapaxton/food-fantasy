import './RecipeIngredientsForm.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeInstructionsForm ({ buildRecipe }) {

  const [input, setInput] = useState('')
  const [instructions, setInstructions] = useState([])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }  

  const addSteps = () => {
    setInstructions([...instructions, input])
    setInput('')
  }

  const sendInstructions = () => {
    instructions && buildRecipe('instructions', instructions)
  }

  return (
    <div className='recipe-directions-form'>
      <p className='recipe-directions-prompt'>How do you make it?</p>
      <p className='recipe-directions-text'>Now lets enter the necessary steps to prepare and cook this delicious recipe, a thourough explanation is always helpful.</p>
      <input 
      className='recipe-direction-input'
      value={input}
      onChange={handleInputChange}></input>
      <button
      onClick={addSteps}>Add another step</button>
      <div className='ingredient-container'>
        {instructions.map((instruction) => (
          <p>{instruction}</p>
        ))}
      </div>
      <button onClick={sendInstructions}>done</button>
    </div>
  )
}