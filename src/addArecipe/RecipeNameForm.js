import './RecipeNameForm.css'
import { Link } from "react-router-dom";
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
  //why does this look weird?? should I replace the 'name' with something better?

  return (
    <div className='recipe-name-form'>
      <p className='h1'>What is it called?</p>
      <p className='recipe-name-text'>Every great dish has a name. Let's start by adding yours below</p>
      <div className='input-container'>
        <p className='recipe-name'>Recipe Name</p>
        <input 
        className='recipe-name-input'
        value={input}
        onChange={handleInputChange}
        ></input>
      </div>
      <div 
      className='clear-container'
      onClick={clearInput}>Clear</div>
      <div className='button-container'>
        <button className='name-continue-button' onClick={setName}>SAVE & CONTINUE</button>
      </div>
    </div>
  )
}