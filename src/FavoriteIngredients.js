import { Link } from "react-router-dom";

export default function FavoriteIngredients({ ingredients }) {

  return(
    <div className='page-container'>
      <p><Link to='/'>RETURN HOME</Link></p>
      <p>Favorite Ingredients</p>
      {ingredients.map((ingredient) => (
        <div className='ingredient-container'>
          <p>{ingredient}</p>
        </div>
      ))}
    </div>
  )
}