import {  createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import MyRecepiesPage from "./pages/MyRecepiesPage";

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
    path: "/my-recipes",
    element: <MyRecepiesPage />
  },
  {
    path: "*",
    element: <div>404</div>
  }
]);
