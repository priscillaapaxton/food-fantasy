import './RecipeNameForm.css'
import React, { useState } from 'react';

export default function RecipeNameForm({ buildRecipe, advanceStep }) {
  
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const clearInput = () => {
    setInput('')
  }

  const setName = () => {
    input &&
    advanceStep()
    buildRecipe('name', input)
  }

  return (
    <div className='recipe-name-form'>
      <p className='recipe-name-prompt'>What is your recipe called?</p>
      <p className='recipe-name-text'>Every great dish has a name. Let's start by adding it below</p>
      <div className='input-container'>
        <p className='recipe-name'>Recipe Name</p>
        <input 
        className='recipe-name-input'
        value={input}
        onChange={handleInputChange}
        ></input>
      </div>
      <p 
      className='clear-container'
      onClick={clearInput}>Clear</p>
      <div className='button-container'>
        <button className={input ? 'name-continue-button' : 'name-continue-button-inactive'}
         onClick={setName}>SAVE & CONTINUE</button>
      </div>
    </div>
  )
}