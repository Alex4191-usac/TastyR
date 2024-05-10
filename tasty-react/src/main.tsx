import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './App.tsx'
import './index.css'
import RecipeProvider from './providers/RecipeProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecipeProvider>
      <RouterProvider router={router}/>
    </RecipeProvider>
  </React.StrictMode>,
)
