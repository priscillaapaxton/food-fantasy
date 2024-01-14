import { ingredients } from "./Data"
import './IngredientSearch.css'
import React, { useState, useEffect } from "react"

export default function InputSearch() {

  const newIngredients = ingredients.map((ingred) => {
    return ingred.toLowerCase()
  })

  const [inputData, setInputData] = useState('')
  const [ingredientInputData, setIngredientInputData] = useState('')
  const [ingredientDisplay, setIngredientDisplay] = useState([])

  const handleInputChange = (e) => {
    setInputData(e.target.value.toLowerCase())
    console.log('second input', inputData)
  };
  
  const handleIngredientInputChange = (e) => {
    setIngredientInputData(e.target.value)
    console.log('list', ingredientDisplay)
  }

  const testDisplay = newIngredients.filter((ingred) => inputData.length && ingred.includes(inputData)
  //make it so if there is a value in the input that doesn't totall match, it will show the previous list that did.
  )

  const handleRecipeSearchInput = () => {
    setIngredientDisplay([...ingredientDisplay, ingredientInputData])
    setIngredientInputData('')
  }

  return (
    <div className='input-container'>
      <div className='search-container'>
        <div className='recipe-search-container'>
          <h3>Recipe Search</h3>
          <p>Enter Ingredients:</p>
          <input 
            onChange={handleIngredientInputChange} 
            value={ingredientInputData} 
            type='text' 
            name='input'
          />
          <button 
            // type='submit' 
            onClick={handleRecipeSearchInput}
            // value={ingredientInputData}
          >
          click
          </button>
        </div>
        <div className='ingredient-search-container'>
          <p>Ingredient Search</p>
          <input 
            onChange={handleInputChange} 
            value={inputData} 
            type='text' 
            name='input' 
          />
          <div className='ingredient-display'>{testDisplay.map((ingred) => 
            <p>{ingred}</p>
          )}</div>
        </div>
      </div>
      <div className='ingredient-search-display'>
        {ingredientDisplay.map((ingredient) => 
          <p>{ingredient}</p>
        )}
      </div>
    </div>
  )
}