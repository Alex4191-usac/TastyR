import Dish from "@/models/Dish";
import { createContext } from "react";

interface RecipeContextType {
  recipes: Dish[];
  addRecipe: (recipe: Dish) => void;
  removeRecipe: (recipe: Dish) => void;

}

const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  addRecipe: () => {},
  removeRecipe: () => {},
});

export default RecipeContext;