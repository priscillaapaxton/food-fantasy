import React, { useState } from 'react';
import './View.css'
import HotBar from './HotBar';
import InputSearch from './IngredientSearch';
import AddFood from './addArecipe/AddFood.js';

export default function View() {

  const [componentToRender, setComponent] = useState('create')

  const setOption = (choice) => {
    setComponent(choice) 
  }

  const componentMapping = {
    'search': <InputSearch />,
    'create': <AddFood />,
  };

  return (
    <div className='app-container'>
      <div className='component-container'>
        {componentMapping[componentToRender] || <p>nada</p>}
      </div>
      <div className='hotbar-container'>
        <HotBar setOption={setOption}/>
      </div>
    </div>
    
    
  )
}