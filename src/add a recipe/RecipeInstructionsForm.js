import './RecipeIngredientsForm.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeInstructionsForm () {

  return (
    <div className='recipe-directions-form'>
      <p className='recipe-directions-prompt'>How do you make it?</p>
      <p className='recipe-directions-text'>Now lets enter the necessary steps to prepare and cook this delicious recipe, a thourough explanation is always helpful.</p>
      <input className='recipe-direction-input'></input>
      <button>Add another step</button>
    </div>
  )
}