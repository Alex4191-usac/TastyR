import { useContext, useState } from 'react';
import RecipeContext from "@/context/RecipeContext";
import Dish from '@/models/Dish';
import { Link } from 'react-router-dom';

import { FaTrash } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import ConfirmationModal from '../ui/confirmationModal';


interface ListRecipesProps {
    recipesList: Dish[];
  }
  

const ListFavorites: React.FC<ListRecipesProps> = ({ recipesList }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [recipeToRemove, setRecipeToRemove] = useState<Dish | null>(null);
    const { removeRecipe } = useContext(RecipeContext);

    const handleRemoveRecipe = (recipe: Dish) => {
        setRecipeToRemove(recipe);
        setIsModalOpen(true);
    };

    const handleConfirmRemove = () => {
        if (recipeToRemove) {
          removeRecipe(recipeToRemove);
        }
        setIsModalOpen(false);
      };

    return (
        
        <div className="border rounded-xl py-2 px-4 w-1/2">
            <p className=" text-slate-400 text-xs pb-1">Total Recepies: {recipesList.length}</p>   
            {recipesList.map((recipe: Dish) => (
                <div key={recipe.idMeal} className="flex justify-between  mb-2 p-3 rounded-xl bg-slate-100">
                    <div className="flex">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex flex-col pl-2">
                            <h2 className="text-lg font-bold">{recipe.strMeal}</h2>
                            <p>Recipe no: {recipe.idMeal}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <button onClick={() => handleRemoveRecipe(recipe)} className="ml-auto bg-rose-600 hover:bg-rose-500 text-white px-2 py-2 rounded">
                            <FaTrash className='text-white'/>
                        </button>
                        <Link to={`/recipe/${recipe.idMeal}`} className=" flex items-center ml-auto bg-black hover:bg-gray-600 text-white px-2 py-2 rounded">
                            <GiCookingPot className='text-xl mr-1'/>View Recipe
                        </Link>
                    </div>
                </div>
            ))}
            {isModalOpen && (
                <ConfirmationModal
                    isOpen={isModalOpen}
                    message="Are you sure you want to remove this recipe?"
                    onConfirm={handleConfirmRemove}
                    onCancel={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default ListFavorites;