import { useState } from "react";
import RecipeContext from "@/context/RecipeContext";

import React from "react";
import Dish from "@/models/Dish";

const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [recipes, setRecipes] = useState<Dish[]>([]);

    const addRecipe = (recipe: Dish) => {
        setRecipes((prevRecipes) => [...prevRecipes, recipe]);
    };

    const removeRecipe = (recipe: Dish) => {
        setRecipes((prevRecipes) => prevRecipes.filter((r) => r !== recipe));
    };

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeProvider;