import {  createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import RecipePage from "./pages/RecipePage";

export const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Home />
  },
  { 
    path: "/recipe/:id",
    element: <RecipePage />
  },
  {
    path: "*",
    element: <div>404</div>
  }
]);
