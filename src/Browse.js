import './Browse.css'
import { Link } from "react-router-dom"

export default function Browse({ recipes }) {

  return(
    <div className='page-container'>
      <p><Link to='/'>RETURN HOME</Link></p>
      <p>Browse Here</p>
        {recipes.map((recipe) => (
          <div className='recipe-container'>
            <div className='recipe-name-time'>
              <p className='recipe-name'>{recipe.recipeName}</p>
              <div className='cook-time-container'>
                <p className='cook-time'>Cook Time:</p>
                <p>{recipe.cookTime}</p>
              </div>
            </div>
            <div className='ingredients-container-parent'>
              <p className='ingredients'>Ingredients:</p>
              <div className='ingredients-container'>
                {recipe.ingredients.map((ingredient) => 
                <p className='grid'>{ingredient}</p>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}