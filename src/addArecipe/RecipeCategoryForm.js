import './RecipeCategoryForm.css'
import React, { useState } from 'react';

export default function RecipeCategoryForm({ buildRecipe, advanceStep }) {

  const [selected, setSelected] = useState([])

  const setCategory = () => {
    if (selected.length > 0) {
      advanceStep()
      buildRecipe('category', selected)
    }
  }

  const activateButton = (e) => {
    if (selected.includes(e.target.id)) {
      const filtered = selected.filter((id) =>
        id !== e.target.id
      )
      setSelected(filtered)
    } else {
      setSelected([...selected, e.target.id])
    }    
  }
  
  return (
    <div className='recipe-category-form'>
        <p className='recipe-category-prompt'>What type of recipe is it?</p>
      <p className='recipe-category-text'>Categorizing this recipe will help others find it faster</p>
      <div className='button-container'>
        <div className='button-options-container'>
          <div 
          className={selected.includes('breakfast') ? 'active' : 'button'}
          id='breakfast'
          onClick={activateButton}
          >BREAKFAST</div>
          <div 
          className={selected.includes('lunch') ? 'active' : 'button'}
          id='lunch'
          onClick={activateButton}
          >LUNCH</div>
          <div 
          className={selected.includes('dinner') ? 'active' : 'button'}
          id='dinner'
          onClick={activateButton}
          >DINNER</div>
          <div 
          className={selected.includes('dessert') ? 'active' : 'button'}
          id='dessert'
          onClick={activateButton}
          >DESSERT</div>
          <div 
          className={selected.includes('appetizer') ? 'active' : 'button'}
          id='appetizer'
          onClick={activateButton}
          >APPETIZER</div>
          <div 
          className={selected.includes('side') ? 'active' : 'button'}
          id='side'
          onClick={activateButton}
          >SIDE</div>
          <div 
          className={selected.includes('other') ? 'active' : 'button'}
          id='other'
          onClick={activateButton}
          >OTHER</div>
          <div 
          className={selected.includes('vegan') ? 'active' : 'button'}
          id='vegan'
          onClick={activateButton}
          >VEGAN</div>
          <div 
          className={selected.includes('test') ? 'active' : 'button'}
          id='test'
          onClick={activateButton}
          >TEST</div>
          <div 
          className={selected.includes('test2') ? 'active' : 'button'}
          id='test2'
          onClick={activateButton}
          >TEST2</div>
        </div>
      </div>
      <div className='continue-button-container'>
      <button 
      className={selected.length ? 'category-continue-button-active' : 'category-continue-button-inactive'} 
      onClick={setCategory}
      >SAVE & CONTINUE</button>
      </div>
      
    </div>
  )
}