import { useState } from "react";
import RecipeContext from "@/context/RecipeContext";

import React from "react";

const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [recipes, setRecipes] = useState<string[]>([]);

    const addRecipe = (recipe: string) => {
        setRecipes((prevRecipes) => [...prevRecipes, recipe]);
    };

    const removeRecipe = (recipe: string) => {
        setRecipes((prevRecipes) => prevRecipes.filter((r) => r !== recipe));
    };

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeProvider;