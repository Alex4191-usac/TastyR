import { useState } from "react";
import RecipeContext from "@/context/RecipeContext";

import React from "react";
import Dish from "@/models/Dish";

const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [recipes, setRecipes] = useState<Dish[]>([]);

    const addRecipe = (recipe: Dish) => {
        const recipeId = recipe.idMeal;
        const isAlreadyAdded = checkRecipe(recipeId);
        if (isAlreadyAdded) {
            return;
        }
        setRecipes((prevRecipes) => [...prevRecipes, recipe]);
    };

    const removeRecipe = (recipe: Dish) => {
        const recipeId = recipe.idMeal;
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.idMeal !== recipeId));
    };

    const checkRecipe = (id: string) => {
        return recipes.some((recipe) => recipe.idMeal === id);
    };

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe, checkRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeProvider;