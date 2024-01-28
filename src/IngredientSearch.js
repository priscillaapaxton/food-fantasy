import { ingredients } from "./Data"
import './IngredientSearch.css'
import React, { useState, useEffect } from 'react'

import { recipes } from "./Data"

export default function InputSearch() {

  const [ingredientInputData, setIngredientInputData] = useState('')
  const [ingredientDisplay, setIngredientDisplay] = useState([])
  const [resultsToDisplay, setResults] = useState([])
  
  const handleIngredientInputChange = (e) => {
    setIngredientInputData(e.target.value)
  }

  const handleRecipeSearchInput = () => {
    setIngredientDisplay([...ingredientDisplay, ingredientInputData])
    setIngredientInputData('')
  }

  const results = recipes.filter((recipe) => {
    return recipe.ingredients.some((ingredient) => {
      return ingredientDisplay.includes(ingredient)
    })
  })

  const getResults = () => {
    setResults(results)
    console.log(results)
  }


  // const includedIngredients = recipes.filter((recipe) => {
  //   return recipe.ingredients.some((ingredient) => {
  //     return given.includes(ingredient)
  // })
  // })

  console.log('results', resultsToDisplay)
  console.log('ingredient display', ingredientDisplay)

  return (
    <div className='search-component-container'>
      <div className='search-container'>
        <div className='ingredient-input-container'>
          <h3>Recipe Search</h3>
          <p>Enter Ingredients:</p>
          <input 
            onChange={handleIngredientInputChange} 
            value={ingredientInputData} 
            type='text' 
            name='input'
          />
          <button onClick={handleRecipeSearchInput}>
          add ingredient
          </button>
          <button onClick={getResults}>search</button>
        </div>
        <div className='ingredient-input-display'>
          {ingredientDisplay.map((ingredient) => 
            <p>{ingredient}</p>
          )}
        </div>
      </div>
      {/* <div className='results-display-container'>
        {results.map((result) => 
          <div>{result}</div>
        )}
      </div> */}
    </div>
  )
}