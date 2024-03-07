import './RecipeInstructionsForm.css'
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
      <p className='recipe-directions-text'>Now lets enter the necessary steps to prepare and cook this delicious recipe.</p>

      <div className='instruction-container'>
        {instructions.map((instruction, index) => (
          <div className={`
            ${instructions.length === 1 ? 'single' : ''}
            ${instructions.length === 2 ? (index === 0 ? 'first' : 'last') : ''}
            ${instructions.length > 2 && index === 0 ? 'first' : ''}
            ${instructions.length > 2 && index === instructions.length -1 ? 'last' : ''}
            ${instructions.length > 2 && index > 0 && index < instructions.length -1 ? 'others' : '' }
          `}>
            <div className='instructions-detail-container'>
            <p className='instruction-counter'>Instruction {index + 1}</p>
              <p className='instruction-detail'>{instruction}</p>
            </div>
            
            <img 
            className='remove-button' 
            src='/remove.png' 
            />
          </div>
        ))}
      </div>
      <div className='instruction-input-container'>
        <p className='instruction-input-counter'>Step {instructions.length + 1}</p>
        <input 
        className='recipe-direction-input'
        value={input}
        onChange={handleInputChange}></input>
        <div className='instructions-button-control'>
          <p className='add-instruction' onClick={addSteps}>add step</p>
          <p className='clear-instruction' >clear</p>
        </div>
      </div>
      <button className='instruction-continue-button' onClick={sendInstructions}>Save and Continue</button>
    </div>
  )
}