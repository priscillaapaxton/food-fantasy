import './RecipeIngredientsForm.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RecipeIngredientsForm({ advanceStep, buildRecipe }) {

  const [firstClick, setFirstClick] = useState(0)
  const [ingredientInput, setIngredientInput] = useState('')
  const [quantityInput, setQuantityInput] = useState(0)
  const [measurementInput, setMeasurementInput] = useState('')
  const [notesInput, setNotesInput] = useState('')
  const [ingredients, setIngredients] = useState([])

  const click = () => {
    setFirstClick(1)
  }

  const handleInputChange = (e) => {
    if (e.target.id === 'name') {
      setIngredientInput(e.target.value)
    } else if (e.target.id === 'quantity') {
      setQuantityInput(e.target.value)
    } else if (e.target.id === 'measurement') {
      setMeasurementInput(e.target.value)
    } else if (e.target.id === 'notes') {
      setNotesInput(e.target.value)
    }
  }

  //no ingredient ID yet

  const addIngredients = () => {
    setIngredients([...ingredients, {
      ingredientId: Date.now(),
      ingredientName: ingredientInput,
      ingredientQuantity: quantityInput,
      ingredientMeasurement: measurementInput,
      ingredientNotes: notesInput,
    }])
    setIngredientInput('')
    setQuantityInput(0)
    setMeasurementInput('')
    setNotesInput('')
  }

  const clear = () => {
    setIngredientInput('')
    setQuantityInput(0)
    setMeasurementInput('')
    setNotesInput('')
  }

  const deleteIngredient = (ingredientId) => {
    const removed = ingredients.filter((ingredient) =>
      ingredient.ingredientId !== ingredientId
    )
    setIngredients(removed)
  }

  const sendIngredients = () => {
    ingredients && 
    advanceStep()
    buildRecipe('ingredients', ingredients)
  }

  
  return (
    <div className='recipe-ingredients-form'>
      <p className='recipe-ingredient-prompt'>What goes in it?</p>
      <p className='recipe-name-text'>Now let's add the ingredients, their amounts, and any special instructions they have.</p>

      <div className='ingredient-container'>
        {ingredients.map((ingredient, index) => (
          <div
          key={index} 
          className={`
            ${ingredients.length === 1 ? 'single' : ''}
            ${ingredients.length === 2 ? (index === 0 ? 'first' : 'last') : ''}
            ${ingredients.length > 2 && index === 0 ? 'first' : ''}
            ${ingredients.length > 2 && index === ingredients.length -1 ? 'last' : ''}
            ${ingredients.length > 2 && index > 0 && index < ingredients.length -1 ? 'others' : '' }
          `}>            
            <div className='ingredient-details-container'>
              <p className='ingredient-counter'>Ingredient {index + 1}</p>
              <p className='ingredient-info'><b>{ingredient.ingredientQuantity} {ingredient.ingredientMeasurement}</b> {ingredient.ingredientName}, {ingredient.ingredientNotes}</p>
            </div>
            <img 
            className='remove-button' 
            src='/remove.png'
            onClick={() => deleteIngredient(ingredient.ingredientId)} 
            />
          </div>
        ))}
      </div>

      <div className='add-ingredient-form-container'>

        <div className='ingredient-input-container'>
          <p className='ingredient-input-count'>Ingredient {ingredients.length + 1}</p>
          <input 
          className='recipe-ingredient-input'
          id='name'
          value={firstClick === 0 ? 'Add your ingredients here...' : ingredientInput}
          onClick={click}
          onChange={handleInputChange}></input>
        </div>

        <div className='ingredient-dropdown-container'>
          <select 
          className='drop-down'
          onChange={handleInputChange}
          id='quantity'
          value={quantityInput}>
            <option value=''>amount</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
          <select
          className='drop-down'
          onChange={handleInputChange} 
          id='measurement'
          value={measurementInput}>
            <option value=''>measurement</option>
            <option value='cup'>cup</option>
            <option value='teaspoon'>teaspoon</option>
            <option value='pound'>pound</option>
            <option value='gram'>gram</option>
          </select>
        </div>

        <div className='ingredient-notes-container'>
          <input 
          className='ingredient-notes'
          id='notes'
          onChange={handleInputChange}
          value={notesInput}></input>
        </div>
      </div>
      <div className='button-control'>
        <p className='add' onClick={addIngredients}>add ingredient</p>
        <p className='clear' onClick={clear}>clear</p>
      </div>
      
      <button 
      onClick={sendIngredients}
      className='ingredient-continue-button'
      >Save and Continue</button>
    </div>
  )
}