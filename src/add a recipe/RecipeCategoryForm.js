import './RecipeCategoryForm.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeCategoryForm({ buildRecipe, advanceStep }) {

  // const [selection, setSelection] = useState('')

  // const handleInputChange = (e) => {
  //   setSelection(e.target.value)
  // }

  const setCategory = (e) => {
    buildRecipe('category', e.target.name)
    advanceStep()
  }

  return (
    <div className='recipe-category-form'>
      <p className='recipe-category-prompt'>What type of recipe is it?</p>
      <p className='recipe-category-text'>Categorizing this recipe will help others find it faster</p>
      <div className='button-container'>
        <button 
        name='Breakfast'
        onClick={setCategory}>Breakfast</button>
        <button 
        name='Lunch'
        onClick={setCategory}>Lunch</button>
        <button 
        name='Dinner'
        onClick={setCategory}>Dinner</button>
        <button 
        name='Dessert'
        onClick={setCategory}>Dessert</button>
        <button 
        name='Appetizer'
        onClick={setCategory}>Appetizer</button>
        <button 
        name='Side'
        onClick={setCategory}>Side</button>
        <button 
        name='Other'
        onClick={setCategory}>Other</button>
      </div>
      {/* <select 
      className='select'
      value={selection}
      onChange={handleInputChange}>
        <option value=''></option>
        <option value='breakfast'>Breakfast</option>
        <option value='lunch'>Lunch</option>
        <option value='dinner'>Dinner</option>
      </select>
      <button onClick={setCategory}>done</button> */}
    </div>
  )
}