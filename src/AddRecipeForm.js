import './AddRecipeForm.css';
import React, { useState } from 'react';

export default function AddRecipeForm() {

  const [ingredientInputData, setInputData] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleIngredientInputChange = (e) => {
    setInputData(e.target.value.toLowerCase())
  }
  const displayIngredient = (e) => {
    if (e.key === 'Enter') {
      setIngredients([...ingredients,ingredientInputData]);
      setInputData('');
    }
    // e.key === 'Enter' && (setIngredients([...ingredients,inputData]), setInputData(''));
  }

  const [preparationInputData, setPreparationInputData] = useState('')
  const [preparation, setPreparation] = useState([])

  const handlePreparationInputChange = (e) => {
    setPreparationInputData(e.target.value.toLowerCase())
  }

  const displayPreparation = (e) => {
    if (e.key === 'Enter') {
      setPreparation([...preparation, preparationInputData]);
      setPreparationInputData('');
    }
  }


  return(
    <div className='recipe-form'>
      <div className='recipe-name-input'>
        <input className='recipe-input'/>
        <p className='recipe-name'>RECIPE NAME</p>
      </div>
      <div className='ingredient-input-container'>
        <p>INGREDIENTS</p>
        <div className='ingredient-display-container'>
          <input 
            className='ingredient-input'
            onChange={handleIngredientInputChange}
            onKeyDown={displayIngredient} 
            value={ingredientInputData} 
            type='text' 
            name='input'
          />
          <div className='ingredient-container'>
            {ingredients.map((ingredient) =>
              <p>{ingredient}</p>
          )}
        </div>
        </div>
      </div>
      <div className='preparation-input-container'>
        <p>Preparation</p>
        <div className='preparation-display-container'>
          <input 
            className='preparation-input'
            onChange={handlePreparationInputChange}
            onKeyDown={displayPreparation} 
            value={preparationInputData} 
            type='text' 
            name='input'
          />
          <div className='preparation-container'>
            {preparation.map((prep) => 
              <p>{prep}</p>
            )}
          </div>
        </div>
      </div>
      <button className='save-recipe'>SAVE RECIPE</button>
    </div>
  )
}