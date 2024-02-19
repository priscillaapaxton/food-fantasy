import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Main from './Main';
import Widgets from './widgets';

import View from './View';

import AddFood from './add a recipe/AddFood';
import Browse from './Browse';
import InputSearch from './IngredientSearch';

import { ingredients, recipes, combos } from './Data';
//test


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <View />
      },
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
