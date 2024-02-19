import './RecipeIngredientsForm.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeInstructionsForm ({ advanceStep, buildRecipe }) {

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
    instructions && 
    buildRecipe('instructions', instructions)
    advanceStep()
  }

  return (
    <div className='recipe-directions-form'>
      <p className='recipe-directions-prompt'>How do you make it?</p>
      <p className='recipe-directions-text'>Now lets enter the necessary steps to prepare and cook this delicious recipe, a thourough explanation is always helpful.</p>
      <div className='instruction-container'>
        {instructions.map((instruction) => (
          <div className='individual-instruction'>
            <p>{instruction}</p>
          </div>
        ))}
      </div>
      <input 
      className='recipe-direction-input'
      value={input}
      onChange={handleInputChange}></input>
      <div className='button-container'>
        <button
        onClick={addSteps}>Add another step</button>
        <button onClick={sendInstructions}>Save and Continue</button>
      </div>
    </div>
  )
}