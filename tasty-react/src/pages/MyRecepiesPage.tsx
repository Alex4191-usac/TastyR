import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "@/context/RecipeContext";
import ListFavorites from "@/components/lists/ListFavorites";
import { FaArrowLeft } from "react-icons/fa";


const MyRecepiesPage: React.FC = () => {
    const { recipes } = useContext(RecipeContext);   
    const navigate = useNavigate();

    return (
        <div className="min-w-screen">
            <div className="pt-5 pl-5">
                <button 
                onClick={
                    () => navigate(-1)
                } 
                className="bg-black text-white font-semibold rounded-lg p-2"
                >
                <FaArrowLeft />
            </button>  
            </div>
            <div className=" flex flex-col items-center justify-center pt-5">
                <h1 className="font-briem font-bold text-2xl pb-4">My Recipes</h1>
                { recipes.length === 0 ? <p>No recipes yet :C</p> : <ListFavorites recipesList={recipes} />}
            </div>
           
        </div>
    );
};

export default MyRecepiesPage;