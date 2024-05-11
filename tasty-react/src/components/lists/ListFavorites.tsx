import Dish from '@/models/Dish';
import React from 'react';
import { FaTrash } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { Link } from 'react-router-dom';




interface ListRecipesProps {
    recipesList: Dish[];
  }
  

const ListFavorites: React.FC<ListRecipesProps> = ({ recipesList }) => {

    return (
        <div className="border rounded-xl p-4 w-1/2">
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
                        <button className="ml-auto bg-rose-600 hover:bg-rose-500 text-white px-2 py-2 rounded">
                           <FaTrash className='text-white'/>
                        </button>
                        <Link to={`/recipe/${recipe.idMeal}`} className=" flex items-center ml-auto bg-black hover:bg-gray-600 text-white px-2 py-2 rounded">
                            <GiCookingPot className='text-xl mr-1'/>View Recipe
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListFavorites;