import { useLoaderData, Link } from "react-router-dom";
import './AddFood.css'

export default function AddFood() {

  return (
    <div className='page-container'>
      <p><Link to='/'>RETURN HOME</Link></p>
      <div className='selection-container'>
        <p>Add Recipe</p>
        <p>Add Ingredient Combo</p>
      </div>
    </div>
  )
}