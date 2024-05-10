import { createContext } from "react";
//import Dish from "@/models/Dish";

interface RecipeContextType {
  recipes: string[];
  addRecipe: (recipe: string) => void;
  removeRecipe: (recipe: string) => void;

}

const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  addRecipe: () => {},
  removeRecipe: () => {},
});

export default RecipeContext;