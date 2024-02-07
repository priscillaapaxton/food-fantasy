import './RecipeReview.css';
import React, { useState } from 'react';

export default function RecipeReview({recipe}) {

  return (
    <div className='recipe-review-form'>
      <p className='recipe-review-prompt'>Let's review it</p>
      <p>Now that we've got all the details for this recipe, let's double check and make sure we've included all of the necessary information someone needs to cook it.</p>
      <div className='recipe-name-review'>
        <p className='name'>Name</p>
        <p className='recipe-name'>{recipe.name}</p>
      </div>
      <div className='recipe-category-review'>
        <p className='category'>Category</p>
        <p className='recipe-category'>{recipe.category}</p>
      </div>
      <div className='recipe-ingredient-review'>
        <p className='ingredient'>Ingredients</p>
        <p className='recipe-ingredient'>{recipe.ingredients}</p>
      </div>
      <div className='recipe-instructions-review'>
        <p className='instructions'>Instructions</p>
        <p className='recipe-instructions'>{recipe.instructions}</p>
      </div>
      <div className='buttons-container'>
        <button>Submit Recipe</button>
        <button>Start Over</button>
        <button>Save For Later</button>
      </div>
    </div>
  )
}