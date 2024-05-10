import { useContext } from "react";
import RecipeContext from "@/context/RecipeContext";



const MyRecepiesPage: React.FC = () => {
    const { recipes } = useContext(RecipeContext);   

    return (
        <div className="min-w-screen">
            <div>
                
            </div>
            <div className=" flex flex-col items-center justify-center pt-5">
                <h1 className="font-briem font-bold text-2xl pb-4">My Recipes</h1>
                { recipes.length === 0 ? <p>No recipes yet :C</p> : null }
            </div>
           
        </div>
    );
};

export default MyRecepiesPage;