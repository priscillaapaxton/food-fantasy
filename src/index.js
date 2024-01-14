import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

import Widgets from './widgets';

import AddFood from './AddFood';
import FavoriteIngredients from './FavoriteIngredients';
import Trending from './Trending';
import FavoriteRecipes from './FavoriteRecipes';
import RecipeSearch from './RecipeSearch';
import InputSearch from './IngredientSearch';

import { ingredients, recipes, combos } from './Data';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <><Widgets /><InputSearch /></>
      },
      {
        path: '/AddFood',
        element: <AddFood />,
      },
      // {
      //   path: '/FavoriteIngredients',
      //   element: <FavoriteIngredients ingredients={ingredients}/>,

      // },
      // {
      //   path: '/Trending',
      //   element: <Trending />
      // },
      // {
      //   path: '/FavoriteRecipes',
      //   element: <FavoriteRecipes recipes={recipes}/>
      // }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
