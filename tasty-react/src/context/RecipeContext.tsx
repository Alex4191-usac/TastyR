import Dish from "@/models/Dish";
import { createContext } from "react";

interface RecipeContextType {
  recipes: Dish[];
  addRecipe: (recipe: Dish) => void;
  removeRecipe: (recipe: Dish) => void;
  checkRecipe: (id: string) => boolean;

}

const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  addRecipe: () => {},
  removeRecipe: () => {},
  checkRecipe: () => false,
});

export default RecipeContext;