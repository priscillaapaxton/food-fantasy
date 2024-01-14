import { Link } from "react-router-dom"

export default function FavoriteRecipes({ recipes }) {

  return(
    <div className='page-container'>
      <p><Link to='/'>RETURN HOME</Link></p>
      <p>favorite recipes</p>
        {recipes.map((recipe) => (
          <div>
            <p>{recipe.recipeName}</p>
            <p>{recipe.ingredients}</p>
          </div>
        ))}
    </div>
  )
}