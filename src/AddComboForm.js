import './AddComboForm.css';
import React, { useState } from 'react';

export default function AddComboForm() {

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
  }

  return(
    <div className='combo-form'>
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
      <button className='save-recipe'>SAVE COMBO</button>
    </div>
  )
}