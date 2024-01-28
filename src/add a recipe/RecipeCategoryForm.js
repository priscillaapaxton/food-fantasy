import './RecipeCategoryForm.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeCategoryForm() {

  return (
    <div className='recipe-category-form'>
      <p className='recipe-category-prompt'>What type of recipe is it?</p>
      <p className='recipe-category-text'>Categorizing this recipe will help others find it faster</p>
      <select></select>
      <button>Next</button>
    </div>
  )
}