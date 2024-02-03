import './RecipeCategoryForm.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeCategoryForm({ getRecipeCategory }) {

  const [selection, setSelection] = useState('')

  const handleInputChange = (e) => {
    setSelection(e.target.value)
  }

  const setCategory = () => {
    selection && getRecipeCategory(selection)
  }

  return (
    <div className='recipe-category-form'>
      <p className='recipe-category-prompt'>What type of recipe is it?</p>
      <p className='recipe-category-text'>Categorizing this recipe will help others find it faster</p>
      <select 
      className='select'
      value={selection}
      onChange={handleInputChange}>
        <option value=''></option>
        <option value='breakfast'>Breakfast</option>
        <option value='lunch'>Lunch</option>
        <option value='dinner'>Dinner</option>
      </select>
      <button onClick={setCategory}>done</button>
    </div>
  )
}