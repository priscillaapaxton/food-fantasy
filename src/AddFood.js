import './AddFood.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import AddComboForm from './AddComboForm';
import AddRecipeForm from './AddRecipeForm';

export default function AddFood() {

  const [addRecipeButton, setAddRecipeButton] = useState(true)
  const [addComboButton, setAddComboButton] = useState(false)

  const changeRecipeButton = () => {
    setAddRecipeButton(false)
    setAddComboButton(true)
  }

  const changeComboButton = () => {
    setAddRecipeButton(true)
    setAddComboButton(false)
  }

  return (
    <div className='page-container'>
      <p><Link to='/'>RETURN HOME</Link></p>
      <div className='selection-container'>
        <p 
          className='add-recipe' 
          onClick={changeComboButton} 
          style={ addRecipeButton ? {color: 'white', backgroundColor: 'green'} : {}}
          >
          Add Recipe
        </p>
        <p 
          className='add-combo'
          onClick={changeRecipeButton} 
          style={ addComboButton ? {color: 'white', backgroundColor: 'green'} : {}}
          >
          Add Ingredient Combo
        </p>
      </div>
      <div className='form-container'>{ addRecipeButton ? <AddRecipeForm/> : <AddComboForm/>}</div>
    </div>
  )
}