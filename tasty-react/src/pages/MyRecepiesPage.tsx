import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "@/context/RecipeContext";
import ListFavorites from "@/components/lists/ListFavorites";
import { FaArrowLeft } from "react-icons/fa";
import Pagination from "@/components/lists/ListPagination";
import EmptyFavorites from "@/components/items/EmptyFavorites";


const MyRecepiesPage: React.FC = () => {
    const { recipes } = useContext(RecipeContext);   
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 4;
    const pageRange = 3; 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDishes = recipes?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = recipes ? Math.ceil(recipes.length / itemsPerPage) : 0;

    

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
                { recipes.length === 0 ? <EmptyFavorites/> : <ListFavorites recipesList={currentDishes} />}
            </div>
              {recipes.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                    pageRange={pageRange}
                />
                )}
        </div>
    );
};

export default MyRecepiesPage;