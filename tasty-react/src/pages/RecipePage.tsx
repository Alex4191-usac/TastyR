import { useParams, useNavigate } from "react-router-dom"
import useMeal from "@/hooks/useMeal"
import { GiKnifeFork  } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";



const RecipePage = () => {
  const { id } = useParams<{ id: string }>()
  const meal = useMeal(id ?? "")
  const navigate = useNavigate()

  return (
    <section>
      <div className="p-5 shadow-md rounded-lg">
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
          <div >
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
        <div className="flex rounded-xl pt-5">
          <div className="w-2/3 flex align items-center justify-center ">
            <img src={meal?.strMealThumb} alt={meal?.strMeal} className="rounded-lg" />
          </div>
          <div className="w-1/3 ">
            <div className="flex items-center text-rose-500">
                <GiKnifeFork className="text-2xl" />
                <div className="text-2xl font-bold pl-2">Ingredients:
                </div>
            </div>
            <ul className="pt-4 text-base">
              {Object.entries(meal ?? {})
                .filter(([key, value]) => key.startsWith("strIngredient") && value)
                .map(([key, value], index) => (
                  <li key={index} className="p-1">
                    {value} - {meal[`strMeasure${key.slice(-1)}`]}
                  </li>
                ))}
            </ul>
            </div>

        </div>
         <div className="pt-2 pr-5 pl-5 text-justify">
          <h2 className="text-xl font-bold">
            Instructions:
          </h2>
          <p className="pt-4 text-base">{meal?.strInstructions}</p>
         </div>
       </div>
    </section>
  )
}

export default RecipePage