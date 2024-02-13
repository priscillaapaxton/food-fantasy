import './RecipeNameForm.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeNameForm({ buildRecipe, advanceStep }) {
  
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const setName = () => {
    input &&
    advanceStep()
    buildRecipe('name', input)
  }
  //why does this look weird?? should I replace the 'name' with something better?



  return (
    <div className='recipe-name-form'>
      <p className='recipe-name-prompt'>What is it called?</p>
      <p className='recipe-name-text'>Every great dish has a name. Let's start by adding yours below</p>
      <div className='recipe-name-container'>
        <p className='recipe-name'>Recipe Name</p>
      </div>
      <div className='input-container'>

        
      </div>
      <input 
      className='recipe-name-input'
      value={input}
      onChange={handleInputChange}
      ></input>
      <div className='button-container'>
        <button className='continue-button' onClick={setName}>SAVE & CONTINUE</button>
      </div>
    </div>
  )
}