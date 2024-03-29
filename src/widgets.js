import { Link } from 'react-router-dom';

import './widgets.css';

export default function Widgets() {
  
  return(
    <div className='widgets-container'>
        <Link to='/AddFood' className='widget' id='addFood'>Add Recipe or Flavor Combination</Link>
        <Link to='/Browse' className='widget' id='browse'>Browse All Recipes</Link>
        <Link to='/FavoriteCombos' className='widget' id='favoriteCombos'>User Navigation</Link>
    </div>
  )

}