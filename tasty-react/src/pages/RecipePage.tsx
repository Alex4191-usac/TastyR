import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import useMeal from "@/hooks/useMeal"
import Dish from "@/models/Dish";
import RecipeContext from "@/context/RecipeContext";
import { GiKnifeFork  } from "react-icons/gi";
import { FaArrowLeft, FaHeart, FaShareAlt  } from "react-icons/fa";
import ShareModal from "@/components/ui/shareModal";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>()
  const meal = useMeal(id ?? "")
  const navigate = useNavigate()
  const {addRecipe, checkRecipe} = useContext(RecipeContext)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);




  const addFavorite = () => {
    const dish: Dish = {
      idMeal: meal?.idMeal ?? "",
      strMeal: meal?.strMeal ?? "",
      strMealThumb: meal?.strMealThumb ?? ""
    }
    addRecipe(dish);
  }

  const getlink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsModalOpen(false);
  };


  return (
    <section>
      <div className="pt-5 pl-8 pr-8 pb-5 shadow-md rounded-lg">
        <div className="flex justify-between ">
          <div className="flex-col">
            <h1 className="text-2xl font-bold">{meal?.strMeal}</h1>
            <p className="text-lg text-gray-500">Category: {meal?.strCategory}</p>        
            <p className="text-lg text-gray-500">Area: {meal?.strArea}</p>
          
            <div className="flex flex-row">
              <p className="text-lg text-gray-500 pr-2">Tags: </p>
              {
                meal?.strTags?.split(",").map((tag, index) => (
                  <div key={index} className=" flex items-center justify-center bg-rose-500 px-3 mx-1 text-white font-semibold rounded-full">{tag}</div>
                ))
              }
            </div>
          </div>
          <div>
            <button 
              onClick={
                () => navigate(-1)
              } 
              className="bg-black text-white font-semibold rounded-lg p-2"
            >
              <FaArrowLeft />
            </button>  
          </div>
        </div>
        <div className="flex flex-col sm:flex-row rounded-xl pt-7 ">
          <div className="w-2/3 flex justify-center  gap-5 ">
            <div className="flex gap-3 flex-col ">
              <button onClick={addFavorite} className={`p-3 rounded-xl ${checkRecipe(id ?? "") ? 'bg-rose-500' : 'bg-black'} hover:bg-gray-400 `}>
                <FaHeart className="text-white" />
              </button>
              <button onClick={()=> setIsModalOpen(true) } className="bg-slate-500 p-3 rounded-xl hover:bg-slate-400">
                <FaShareAlt className="text-white" />
              </button>

            </div>
            <img src={meal?.strMealThumb} alt={meal?.strMeal} className="rounded-lg" />
          </div>
          <div className="sm:w-1/3  flex flex-col items-center justify-center sm:items-start">
            <div className="flex items-center text-rose-500">
                <GiKnifeFork className="text-2xl" />
                <div className="text-2xl font-bold pl-2">Ingredients:
                </div>
            </div>
            <div className="flex pt-2  ">
              <ul className="py-4 px-4 text-base   rounded-xl bg-emerald-50   ">
                {Object.entries(meal ?? {})
                  .filter(([key, value]) => key.startsWith("strIngredient") && value)
                  .map(([key, value], index) => (
                    <li key={index} className="p-1 ">
                      * {value} - {meal?.[`strMeasure${key.slice(-1)}` as keyof typeof meal]}
                    </li>
                  ))}
              </ul>
            </div>
            </div>

        </div>
         <div className="pt-2 mt-2 pr-5 pl-5 pb-2 text-justify bg-slate-50 rounded-xl">
          <h2 className="text-xl font-bold">
            Instructions:
          </h2>
          <p className="pt-4 text-base">{meal?.strInstructions}</p>
         </div>
       </div>
       {isModalOpen && (
                <ShareModal
                    isOpen={isModalOpen}
                    location={window.location.href}
                    message="Share this recipe with your friends!"
                    onCopy={() => getlink()}
                    onCancel={() => setIsModalOpen(false)}
                />
            )}
    </section>
  )
}

export default RecipePage